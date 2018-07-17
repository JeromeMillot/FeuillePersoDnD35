export class Objet {
    protected _label = '';
    protected _type = '';
    protected _poids = 0;
    protected _stackable = false;
    protected _description = '';

    constructor(label: string, type: string, poids: number, stackable: boolean, description: string) {
        this.label = label;
        this.description = description;
        this.poids = poids;
        this.stackable = stackable;
    }

    public get description() {
        return this._description;
    }
    public set description(value) {
        this._description = value;
    }
    public get label() {
        return this._label;
    }
    public set label(value) {
        this._label = value;
    }
    public get type() {
        return this._type;
    }
    public set type(value) {
        this._type = value;
    }
    public get poids() {
        return this._poids;
    }
    public set poids(value) {
        this._poids = value;
    }
    public get stackable() {
        return this._stackable;
    }
    public set stackable(value) {
        this._stackable = value;
    }
}
