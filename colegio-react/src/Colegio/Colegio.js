import './colegio.css';
import Aula from '../Aula/Aula.js'
import Alumno from '../Alumno/Alumno.js';
import React from 'react';

class Colegio extends React.Component{
    nombre="Para chicos";
    constructor(props){
        super(props)
        const aulas = []
        for(let cont = 0;cont < this.props.cantAulas;cont++){
            aulas.push ({edadAula:cont, curso:[], docente:cont})
        }
        this.state={nombre:this.nombre, aulas:aulas};
    }
    ingreso(alumnosIngresantes,plantelDocente){
        console.log("aca")
        this.alumnos=alumnosIngresantes
        this.docentes=plantelDocente
        const aulasActuales = this.state.aulas
        aulasActuales.forEach((aula, index)=>{
            var alumnosCurso = this.alumnos.filter((alumno)=>
                alumno.edad == aula.edadAula
            )
            aula.curso = alumnosCurso
            aula.docente = this.docentes.find((docente)=>
                docente.edadCurso == aula.edadAula
            )

        })
        this.setState({aulas:aulasActuales})

    }
    egreso(){
        return this.alumnos
    }
    
    render(){
        return(
        <div className="colegio">Colegio {this.state.nombre}
            {this.state.aulas.map((aula)=>
                <Aula {...aula} />
            )}
        </div>
        )
    }
}

/* function Colegio(){
    const MiColegio = new ColegioDTO (9)
    return (
        <div className="colegio">Colegio</div>
    );
} */

export default Colegio;