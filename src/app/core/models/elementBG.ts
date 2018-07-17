export class ElementBG {
    private _id: number;
    private _content: string;

    constructor(id: number, content: string) {
        this.id = id;
        this.content = content;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
}
