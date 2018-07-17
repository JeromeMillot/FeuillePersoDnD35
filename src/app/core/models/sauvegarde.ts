export class Sauvegarde {
    private _label = '';
    private _description = '';
    private _points = 0;

    constructor(label: string, description: string, points?: number) {
        this.label = label;
        this.description = description;
        if (points) {
            this.points = points;
        }
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

    public get points() {
        return this._points;
    }
    public set points(value) {
        this._points = value;
    }

    addPoint() {
        this.points++
    }

    removePoint() {
        this.points--
    }
}
