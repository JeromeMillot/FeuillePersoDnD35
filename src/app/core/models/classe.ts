export class Classe {
    private _label = '';
    private _BAB: number;
    private _jetRef: number;
    private _jetVig: number;
    private _jetVol: number;
    private _DV: number;
    private _profane: boolean;
    private _divin: boolean;
    private _prestige: boolean;
    private _description = '';
    private _niveau = 1;

    constructor(label: string, BAB: number, jetRef: number, jetVig: number, jetVol: number, DV: number, profane: boolean, divin: boolean, prestige: boolean, niveau: number, description?: string) {
        this.label = label;
        this.BAB = BAB;
        this.jetRef = jetRef;
        this.jetVig = jetVig;
        this.jetVol = jetVol;
        this.DV = DV;
        this.profane = profane;
        this.divin = divin;
        this.prestige = prestige;
        this.niveau = niveau;
        if (description) {
            this.description = description;
        }
    }

    ajouterNiveau() {
        this.niveau++;
    }
    retirerNiveau() {
        this.niveau--;
    }
    public get niveau() {
        return this._niveau;
    }
    public set niveau(value) {
        this._niveau = value;
    }
    public get description() {
        return this._description;
    }
    public set description(value) {
        this._description = value;
    }
    public get prestige(): boolean {
        return this._prestige;
    }
    public set prestige(value: boolean) {
        this._prestige = value;
    }
    public get divin(): boolean {
        return this._divin;
    }
    public set divin(value: boolean) {
        this._divin = value;
    }
    public get profane(): boolean {
        return this._profane;
    }
    public set profane(value: boolean) {
        this._profane = value;
    }
    public get DV(): number {
        return this._DV;
    }
    public set DV(value: number) {
        this._DV = value;
    }
    public get jetVol(): number {
        return this._jetVol;
    }
    public set jetVol(value: number) {
        this._jetVol = value;
    }
    public get jetVig(): number {
        return this._jetVig;
    }
    public set jetVig(value: number) {
        this._jetVig = value;
    }
    public get jetRef(): number {
        return this._jetRef;
    }
    public set jetRef(value: number) {
        this._jetRef = value;
    }
    public get label() {
        return this._label;
    }
    public set label(value) {
        this._label = value;
    }
    public get BAB(): number {
        return this._BAB;
    }
    public set BAB(value: number) {
        this._BAB = value;
    }
}