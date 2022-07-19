import React from "react";
import Alumno from "../Alumno/Alumno";
import "./aula.css"
import { AulaDTO } from '../models/commons';

 function Aula (props:AulaDTO) {
    
    return (
            <>
            <div className="aula">Aula {props.edadAula}
            {props.curso?.map((alumno)=>
                <Alumno {...alumno} />
            )}
            </div>
            </>
    )
}

export default Aula;