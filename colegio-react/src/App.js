import logo from './logo.svg';
import './App.css';
import Colegio from './Colegio/Colegio';
import Alumno from './Alumno/Alumno';
import { useRef } from 'react';

function App() {
  const alumnos =  [{nombre:"José", key:"0", edad:8}, 
                    {nombre:"Luján", key:"1", edad:6},
                    {nombre:"Fátima", key:"2", edad:5},
                    {nombre:"Eva", key:"3", edad:3},
                    {nombre:"Guadalupe", key:"4", edad:1},
                    {nombre:"Joaquín", key:"5", edad:8},
                    {nombre:"Luciano", key:"6", edad:5}]
  const colegio = useRef (null)
  const ingresar = ()=>{
    colegio.current.ingreso(alumnos,[])
  }
  return (
    <div className="App">
      App
      <Colegio ref={colegio} cantAulas={9} />
      {alumnos.map((alumno)=>
        <div>{alumno.nombre}</div>
      )}
      <button onClick={ingresar}>Ingreso</button>
    </div>
  );
}

export default App;
