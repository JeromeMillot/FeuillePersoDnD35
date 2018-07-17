import { Classe } from './classe';
import { Competence } from './competence';
import { Sauvegarde } from './sauvegarde';
import { Don } from './don';

export class Race {
    private _label = '';
    private _description = '';
    private _catTaille = '';
    private _ageMax = 0;
    private _ajustNiv = 0;
    private _vitDeplac = 0;
    private _langues: string[] = [];
    private _prediClasse: Classe;
    private _dons: Don[] = [];
    private _competence: Competence[] = [];
    private _bonusSauv: Sauvegarde[] = [];

constructor(label: string, description: string, catTaille: string, ageMax: number, ajustNiv: number, vitDeplac: number,
            langues: string[], prediClasse: Classe, dons: Don[], competence: Competence[]) {
    this._ageMax = ageMax
    this._ajustNiv = ajustNiv
    this._bonusSauv = this.bonusSauv
    this._catTaille = catTaille
    this._competence = competence
    this._description = description
    this._dons = dons
    this._label = label
    this._langues = langues
    this._prediClasse = prediClasse
    this._vitDeplac = vitDeplac
}


    public get bonusSauv(): Sauvegarde[] {
        return this._bonusSauv;
    }
    public set bonusSauv(value: Sauvegarde[]) {
        this._bonusSauv = value;
    }
    public get competence(): Competence[] {
        return this._competence;
    }
    public set competence(value: Competence[]) {
        this._competence = value;
    }
    public get dons(): Don[] {
        return this._dons;
    }
    public set dons(value: Don[]) {
        this._dons = value;
    }
    public get prediClasse(): Classe {
        return this._prediClasse;
    }
    public set prediClasse(value: Classe) {
        this._prediClasse = value;
    }
    public get label() {
        return this._label;
    }
    public set label(value) {
        this._label = value;
    }
    public get description() {
        return this._description;
    }
    public set description(value) {
        this._description = value;
    }
    public get catTaille() {
        return this._catTaille;
    }
    public set catTaille(value) {
        this._catTaille = value;
    }
    public get ageMax() {
        return this._ageMax;
    }
    public set ageMax(value) {
        this._ageMax = value;
    }
    public get ajustNiv() {
        return this._ajustNiv;
    }
    public set ajustNiv(value) {
        this._ajustNiv = value;
    }
    public get vitDeplac() {
        return this._vitDeplac;
    }
    public set vitDeplac(value) {
        this._vitDeplac = value;
    }
    public get langues(): string[] {
        return this._langues;
    }
    public set langues(value: string[]) {
        this._langues = value;
    }
}
