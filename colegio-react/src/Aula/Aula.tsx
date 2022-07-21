import React from "react";
import Alumno from "../Alumno/Alumno";
import "./aula.css"
import { AulaDTO } from '../models/commons';
import Docente from "../Docente/Docente";

 function Aula (props:AulaDTO) {
    
    return (
            <>
            <div className="aula">Aula {props.edadAula}
            {props.curso?.map((alumno)=>
                <Alumno {...alumno} />
            )}
            <Docente {...props.docente}/>
            </div>
            </>
    )
}

export default Aula;