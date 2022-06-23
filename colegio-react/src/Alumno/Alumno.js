import './alumno.css'

function Alumno (props){ 
    return (<div className="alumno">
        {props.nombre}
        {props.edad}
    </div>)
}
export default Alumno