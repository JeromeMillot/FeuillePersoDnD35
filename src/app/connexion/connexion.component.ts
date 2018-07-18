import { Utilisateur } from './../core/models/utilisateur';
import { Component, OnInit } from '@angular/core';
import { JetonService } from '../core/jeton/jeton.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private utilisateur: Utilisateur
  private _mdp;
  private _id;
  constructor(private jetonService: JetonService) { }

  ngOnInit() {
  }

  logIn() {
    if (this.id && this.mdp) {
      this.utilisateur = new Utilisateur(this.id)
      // TODO: Finir d'implémenter le logIn en implementant le service de connexion

    }

  }

  public get mdp() {
    return this._mdp;
  }
  public set mdp(value) {
    this._mdp = value;
  }
  public get id() {
    return this._id;
  }
  public set id(value) {
    this._id = value;
  }
}
