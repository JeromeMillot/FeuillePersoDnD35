import { Pj } from './pj';

export class Utilisateur {
    private _id = '';
    private _privateToken = '';
    private _role = '';
    private _email = '';
    private _pjListe: Pj[] = [];

    constructor(id: string, privateToken?: string, role?: string, email?: string, pjListe?: Pj[]) {
        this.id = id
        if (privateToken) { this.privateToken = privateToken }
        if (role) { this.role = role }
        if (email) { this.email = email }
        if (pjListe) { this.pjListe = pjListe }
    }

    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }
    public get privateToken() {
        return this._privateToken;
    }
    public set privateToken(value) {
        this._privateToken = value;
    }
    public get role() {
        return this._role;
    }
    public set role(value) {
        this._role = value;
    }
    public get email() {
        return this._email;
    }
    public set email(value) {
        this._email = value;
    }
    public get pjListe(): Pj[] {
        return this._pjListe;
    }
    public set pjListe(value: Pj[]) {
        this._pjListe = value;
    }
}
