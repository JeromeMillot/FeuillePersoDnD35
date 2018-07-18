import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

@Injectable()
export class JetonService {

  private jetonPublic: string;

  constructor() { }

  getJetonPublic(userIdentifiant: string): string {

      if (!this.jetonPublic) {
          this.jetonPublic = this._generateJetonPublic(userIdentifiant);
      }

      return this.jetonPublic;
  }

 /**
  *
  * @param source
  */
  private _base64url(encodedSource: string): string {

      // Remove padding equal characters
      encodedSource = encodedSource.replace(/=+$/, '');

      // Replace characters according to base64url specifications
      encodedSource = encodedSource.replace(/\+/g, '-');
      encodedSource = encodedSource.replace(/\//g, '_');

      return encodedSource;
  }

  private _generateJetonPublic(userIdentifiant: string): string {
      // Si l'url est ok, récupération des données nécessaires pour le bon fonctionnement de l'application

      let jeton = '',
      header = '', // 1ère partie du jeton
      payload = '', // 2ème partie du jeton
      signature, // 3ème partie du jeton
      currentTimestamp: any = new Date(), // @TODO : passer en milliseconde - Utilisé pour définir l'heure de génération du jeton + l'heure d'expiration (génération + 15 minutes)
      endTimestamp: any = new Date(),
      secret: string;
      secret = 'none'; // Secret

      endTimestamp = Math.round(endTimestamp.setDate(currentTimestamp.getDate() + 1) / 1000);
      currentTimestamp = Math.round(currentTimestamp.setDate(currentTimestamp.getDate() - 1) / 1000);
      header = this._base64url(btoa('{ "alg": "HS256", "typ": "JWT" }'));
      payload = this._base64url(btoa('{ "sub": "' + userIdentifiant + '", "iss": "GroupeJDR", "iat": ' + currentTimestamp + ', "exp": ' + endTimestamp + ', "nomAppli": "phftaureau" }'));

      signature = this._base64url(CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(header + '.' + payload, secret))); // crypt
      jeton = header + '.' + payload + '.' + signature;
      return jeton;
  }

  public decypherPrivateToken(privateToken: string) {
    const dotsIndex: number[] = [];
    for (let i = 0; i < privateToken.length; i++) {
      if (privateToken[i] === '.') {
        dotsIndex.push(i);
      }
    }
    let header: any = privateToken.substring(0, dotsIndex[0]) || null;
    let payload: any = privateToken.substring(dotsIndex[0] + 1, dotsIndex[1]) || null;
    let signature: any = privateToken.substring(dotsIndex[1] + 1, privateToken.length ) || null;
    header = JSON.parse(window.atob( header ));
    payload = JSON.parse(window.atob( payload ));
    signature = CryptoJS.enc.Base64.parse(signature);

    return {header: header, payload: payload, signature: signature};
  }
}
