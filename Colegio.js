class Colegio{
    aulas=[];
    alumnos;
    docentes;
    constructor(numAulas){
        for(var it=0;it<numAulas;it++){
            this.aulas.push(new Aula(it))
        }
    }
    ingreso(alumnosIngresantes,plantelDocente){
        this.alumnos=alumnosIngresantes
        this.docentes=plantelDocente
        this.aulas.forEach((aula)=>{
            var alumnosCurso = this.alumnos.filter((actualAlumno)=>
                actualAlumno.edad == aula.edadAula
            )
            aula.curso = alumnosCurso
            aula.docente = this.docentes.find((docente)=>
                docente.edadCurso == aula.edadAula
            )

        })
    }
    egreso(){
        return this.alumnos
    }
}

class Alumno{
    esEstudiante;
    edad;
    nombre;
    conocimientos=[];
    constructor(edad, nombre){
        this.edad = edad;
        this.nombre = nombre;
    }
    aprender(conocimiento){
        this.conocimientos.push(conocimiento)
    }
}

class Aula{
    curso;
    edadAula;
    docente;
    constructor(edad){
        this.edadAula=edad
    }
}

class Docente{
    nombre;
    conocimientos;
    edadCurso;
    constructor(nombre,conocimientos,edadCurso){
        this.nombre=nombre;
        this.conocimientos=conocimientos;
        this.edadCurso=edadCurso;
    }
}
