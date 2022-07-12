import React from "react";
import Alumno from "../Alumno/Alumno";
import "./aula.css"

 function Aula (props) {
    
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