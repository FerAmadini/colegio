import './colegio.css';
import Aula from '../Aula/Aula.js'
import Alumno from '../Alumno/Alumno.js';
import React, { useState } from 'react';

function Colegio (props){
    
        const aulasNuevas = []
        for(let cont = 0;cont < props.cantAulas;cont++){
            aulasNuevas.push ({edadAula:cont, curso:[], docente:cont})
        }
        //this.state={nombre:this.nombre, aulas:aulas};
        const [nombre,setNombre] = useState ("Para chicos")
        const [aulas,setAulas] = useState (aulasNuevas)

        


    const ingreso = () =>{

        // aulas = [{edadAula: 0, curso: [{nombre: jose, edad: 0}]}, {edadAula: 1, curso: []}, {edadAula: 3, curso: []}]

        const aulasActuales = [...aulas];
        aulasActuales.forEach((aula, index)=>{
            var alumnosCurso = props.alumnosActuales.filter((alumno)=>
                alumno.edad == aula.edadAula
            )
            aula.curso = alumnosCurso
            aula.docente = props.plantelDocente.find((docente)=>
                docente.edadCurso == aula.edadAula
            )

        })
        setAulas(aulasActuales)

    }
    /*egreso(){
        return this.alumnos
    }*/
    const egreso = (egresados) =>{
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