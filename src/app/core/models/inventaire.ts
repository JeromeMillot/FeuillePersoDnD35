import { Monnaie } from './monnaie';
import { Objet } from './objet';

export class Inventaire {
    private _poidsTotal = 0;
    private _monnaie: Monnaie[] = [];
    private _objListe: Objet[] = [];
    private _modificateur = 0;

    constructor(poidTotal: number, monnaie: Monnaie[], objListe: Objet[], modificateur: number) {
        this.poidsTotal = poidTotal;
        this.monnaie = monnaie;
        this.objListe = objListe;
        this.modificateur = modificateur;
    }

    public get poidsTotal() {
        return this._poidsTotal;
    }
    public set poidsTotal(value) {
        this._poidsTotal = value;
    }
    public get monnaie(): Monnaie[] {
        return this._monnaie;
    }
    public set monnaie(value: Monnaie[]) {
        this._monnaie = value;
    }
    public get objListe(): Objet[] {
        return this._objListe;
    }
    public set objListe(value: Objet[]) {
        this._objListe = value;
    }
    public get modificateur() {
        return this._modificateur;
    }
    public set modificateur(value) {
        this._modificateur = value;
    }
}
