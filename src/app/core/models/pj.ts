import { Sauvegarde } from './sauvegarde';
import { Don } from './don';
import { Race } from './race';
import { Classe } from './classe';
import { Competence } from './competence';
import { Caracteristique } from './caracteristique';

export class Pj {
    private _nom = '';
    private _age = 0;
    private _poids = 0;
    private _experience = 0;
    private _couleurPeau = '';
    private _couleurYeux = '';
    private _couleurCheveux = '';
    private _race: Race;
    private _classes: Classe[] = [];
    private _force: Caracteristique;
    private _dexterite: Caracteristique;
    private _constitution: Caracteristique;
    private _intelligence: Caracteristique;
    private _sagesse: Caracteristique;
    private _charisme: Caracteristique;
    private _dons: Don[] = [];
    private _competences: Competence[] = [];
    private _sauvVolonte: Sauvegarde;
    private _sauvVigueur: Sauvegarde;
    private _sauvReflexe: Sauvegarde;
    private _CA = 10;

    constructor(nom: string, age: number, poids: number, experience: number, couleurPeau: string, couleurYeux: string, couleurCheveux: string,
        race: Race, classes: Classe[], force: Caracteristique, dexterite: Caracteristique, constitution: Caracteristique, intelligence: Caracteristique,
        sagesse: Caracteristique, charisme: Caracteristique, dons: Don[], competences: Competence[], sauvVolont: Sauvegarde, sauvVigueur: Sauvegarde,
        sauvRef: Sauvegarde, CA: number) {
        this._age = age
        this._charisme = charisme
        this._classes = classes
        this._competences = competences
        this._constitution = constitution
        this._couleurCheveux = couleurCheveux
        this._couleurPeau = couleurPeau
        this.couleurYeux = couleurYeux
        this._dexterite = dexterite
        this._dons = dons
        this._experience = experience
        this._force = force
        this._intelligence = intelligence
        this._nom = nom
        this._poids = poids
        this._race = race
        this._sagesse = sagesse
        this._sauvReflexe = sauvRef
        this._sauvVigueur = sauvVigueur
        this._sauvVolonte = sauvVolont
        this._CA = CA
    }

    public get CA() {
        return this._CA;
    }
    public set CA(value) {
        this._CA = value;
    }
    public get experience() {
        return this._experience;
    }
    public set experience(value) {
        this._experience = value;
    }
    public get nom() {
        return this._nom;
    }
    public set nom(value) {
        this._nom = value;
    }
    public get age() {
        return this._age;
    }
    public set age(value) {
        this._age = value;
    }
    public get poids() {
        return this._poids;
    }
    public set poids(value) {
        this._poids = value;
    }
    public get couleurPeau() {
        return this._couleurPeau;
    }
    public set couleurPeau(value) {
        this._couleurPeau = value;
    }
    public get couleurYeux() {
        return this._couleurYeux;
    }
    public set couleurYeux(value) {
        this._couleurYeux = value;
    }
    public get couleurCheveux() {
        return this._couleurCheveux;
    }
    public set couleurCheveux(value) {
        this._couleurCheveux = value;
    }
    public get race(): Race {
        return this._race;
    }
    public set race(value: Race) {
        this._race = value;
    }
    public get classes(): Classe[] {
        return this._classes;
    }
    public set classes(value: Classe[]) {
        this._classes = value;
    }
    public get force(): Caracteristique {
        return this._force;
    }
    public set force(value: Caracteristique) {
        this._force = value;
    }
    public get dexterite(): Caracteristique {
        return this._dexterite;
    }
    public set dexterite(value: Caracteristique) {
        this._dexterite = value;
    }
    public get constitution(): Caracteristique {
        return this._constitution;
    }
    public set constitution(value: Caracteristique) {
        this._constitution = value;
    }
    public get intelligence(): Caracteristique {
        return this._intelligence;
    }
    public set intelligence(value: Caracteristique) {
        this._intelligence = value;
    }
    public get sagesse(): Caracteristique {
        return this._sagesse;
    }
    public set sagesse(value: Caracteristique) {
        this._sagesse = value;
    }
    public get charisme(): Caracteristique {
        return this._charisme;
    }
    public set charisme(value: Caracteristique) {
        this._charisme = value;
    }
    public get dons(): Don[] {
        return this._dons;
    }
    public set dons(value: Don[]) {
        this._dons = value;
    }
    public get competences(): Competence[] {
        return this._competences;
    }
    public set competences(value: Competence[]) {
        this._competences = value;
    }
    public get sauvVolonte(): Sauvegarde {
        return this._sauvVolonte;
    }
    public set sauvVolonte(value: Sauvegarde) {
        this._sauvVolonte = value;
    }
    public get sauvVigueur(): Sauvegarde {
        return this._sauvVigueur;
    }
    public set sauvVigueur(value: Sauvegarde) {
        this._sauvVigueur = value;
    }
    public get sauvReflexe(): Sauvegarde {
        return this._sauvReflexe;
    }
    public set sauvReflexe(value: Sauvegarde) {
        this._sauvReflexe = value;
    }


}
