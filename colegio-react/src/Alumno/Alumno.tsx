import './alumno.css'
import { AlumnoDTO } from '../models/commons';

function Alumno (props: AlumnoDTO){ 
    return (<div className="alumno">
        {props.nombre}
        {props.edad}
    </div>)
}
export default Alumno