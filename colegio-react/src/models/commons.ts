export interface AlumnoDTO{
    nombre: string,
    edad: number,
    conocimientos: string[]
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