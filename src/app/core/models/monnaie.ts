import { Objet } from './objet';

export class Monnaie extends Objet {
    private _valeurBase = 0;
    private _pays = '';
    private _metal = '';
    private _quantite = 0;

    constructor(label: string, type: string, poids: number, stackable: boolean, description: string, valeurBase: number, pays: string, metal: string, quantite: number) {
        super(label, type, poids, stackable, description);
        this.valeurBase = valeurBase;
        this.pays = pays;
        this.metal = metal;
        this.quantite = quantite;
    }

    public get valeurBase() {
        return this._valeurBase;
    }
    public set valeurBase(value) {
        this._valeurBase = value;
    }
    public get pays() {
        return this._pays;
    }
    public set pays(value) {
        this._pays = value;
    }
    public get metal() {
        return this._metal;
    }
    public set metal(value) {
        this._metal = value;
    }
    public get quantite() {
        return this._quantite;
    }
    public set quantite(value) {
        this._quantite = value;
    }
}
