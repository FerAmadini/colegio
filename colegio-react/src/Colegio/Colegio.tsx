import './colegio.css';
import Aula from '../Aula/Aula'
import Alumno from '../Alumno/Alumno';
import React, { useState } from 'react';
import { AulaDTO, AlumnoDTO, DocenteDTO } from '../models/commons';

function Colegio (props:{cantAulas: number, alumnosActuales: AlumnoDTO[], plantelDocente: DocenteDTO[]}){
    
        const aulasNuevas = []
        for(let cont = 0;cont < props.cantAulas;cont++){
            aulasNuevas.push ({edadAula:cont, curso:[], docente:{}})
        }
        //this.state={nombre:this.nombre, aulas:aulas};
        const [nombre,setNombre] = useState ("Para chicos")
        const [aulas,setAulas] = useState<AulaDTO[]>(aulasNuevas)
        const [cuatrimestre, setCuatrimestre] = useState (0)

        


    const ingreso = () =>{

        // aulas = [{edadAula: 0, curso: [{nombre: jose, edad: 0}]}, {edadAula: 1, curso: []}, {edadAula: 3, curso: []}]

        const aulasActuales = [...aulas];
        aulasActuales.forEach((aula, index)=>{
            var alumnosCurso = props.alumnosActuales.filter((alumno:AlumnoDTO)=>
                alumno.edad == aula.edadAula
            )
            aula.curso = alumnosCurso
            aula.docente = props.plantelDocente.find((docente:DocenteDTO)=>
                docente.nombre == aula.edadAula
            ) as DocenteDTO

        })
        setAulas(aulasActuales)

    }

    const aprender = () =>{
        aulas.forEach((aula)=>{
            //@ts-ignore
            const saber = aula.docente.catedra[cuatrimestre]
            aula.curso.forEach((alumno)=>{
                alumno.conocimientos.push(saber)
            })
        })
        if(cuatrimestre < 3){
        setCuatrimestre (cuatrimestre + 1)
        }
    }
    /*egreso(){
        return this.alumnos
    }*/
    const egreso = (egresados:unknown) =>{
        return []
    }

    return( 
        <>
        <div className="colegio">Colegio {nombre}
            {aulas.map((aula)=>
                <Aula {...aula} />
            )}
        </div>
        <button onClick={ingreso}>Ingreso</button>
        <button onClick={aprender}>Pasar Cuatrimestre</button>
        </>
    )

    }



/* function Colegio(){
    const MiColegio = new ColegioDTO (9)
    return (
        <div className="colegio">Colegio</div>
    );
} */

export default Colegio;