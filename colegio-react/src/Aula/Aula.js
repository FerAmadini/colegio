import React from "react";
import Alumno from "../Alumno/Alumno";
import "./aula.css"

class Aula extends React.Component{
    docente;
    constructor(){
        super()
    }
    render (){
        return (
            <div className="aula">Aula {this.props.edadAula}
            {this.props.curso?.map((alumno)=>
                <Alumno {...alumno} />
            )}
            </div>
        )
    }
}

export default Aula;