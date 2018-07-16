export class Pj {
    nom = ''
    age = 0
    race: Race

}

export class Race {
    libellé = ''
}

export class Classe {
    libellé = ''
    BAB: number
    jetSauv: number
    jetVig: number
    jetVol: number
    DV: string
    profane: boolean
    divin: boolean
    prestige: boolean
    description = ''
}
