import React from "react";
import Alumno from "../Alumno/Alumno";
import "./aula.css"

class Aula extends React.Component{
    docente;
    constructor(){
        super()
    }
    mostrarAlumnos(){
        const alumnos =[]
        this.props.curso?.forEach((alumnoActual)=>{
            alumnos.push (<Alumno />)
        })
        return alumnos
    }
    render (){
        return (
            <div className="aula">Aula {this.props.edadAula}
            {this.props.children}
            </div>
        )
    }
}

export default Aula;