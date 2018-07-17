export class Don {
    private _label = '';
    private _description = '';
    private bonuses: any[] = [];
    constructor(label: string, description: string, bonuses?: any[]) {
        this.label = label;
        this.description = description;
        if (bonuses) {
            this.bonuses = bonuses;
        }
    }

    /**
     * Getter $bonuses
     * @return {any[] }
     */
    public get $bonuses(): any[]  {
        return this.bonuses;
    }

    /**
     * Setter $bonuses
     * @param {any[] } value
     */
    public set $bonuses(value: any[] ) {
        this.bonuses = value;
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

}
