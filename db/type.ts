export type tardis =  {
    dimensiones : [],
    camuflaje: string,
    n_reg_tardis : number,
    anio_actual: number,
}

export type dimensiones =  {
    id : number,
    num_planetas: number,
    plat_visitados: []
}

export type Planetas =  {
    nombre: string,
    tamano: number,
    per_visitantes: [],
    id_plan: number
}
export type Personas =  {
    nombre: string,
    edad: number,
    sexo: string,
    id_per: number
}
