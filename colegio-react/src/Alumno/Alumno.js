import './alumno.css'

function Alumno (props){ 
    return (<div className="alumno">
        {props.nombre}
    </div>)
}
export default Alumno