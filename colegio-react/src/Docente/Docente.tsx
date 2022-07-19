import './docente.css'
import { DocenteDTO } from '../models/commons';

function Docente (props: DocenteDTO){ 
    return (<div className="docente">
        {props.nombre}
        {props.catedra}
    </div>)
}
export default Docente