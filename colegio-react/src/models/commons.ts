export interface AlumnoDTO{
    nombre: string,
    edad: number
}

export interface AulaDTO{
    edadAula: number,
    curso: AlumnoDTO[],
    docente: DocenteDTO
}

export interface DocenteDTO{
    nombre?: number,
    catedra?: string[]
}