import logo from './logo.svg';
import './App.css';
import Colegio from './Colegio/Colegio';
import Alumno from './Alumno/Alumno';
import { useRef } from 'react';

function App() {
  const alumnos =  [{nombre:"José", key:"0"}, 
                    {nombre:"Luján", key:"1"},
                    {nombre:"Fátima", key:"2"},
                    {nombre:"Eva", key:"3"},
                    {nombre:"Guadalupe", key:"4"},
                    {nombre:"Joaquín", key:"5"},
                    {nombre:"Luciano", key:"6"},]
  const colegio = useRef (null)
  const ingresar = ()=>{
    colegio.current.ingreso(alumnos,[])
  }
  return (
    <div className="App">
      App
      <Colegio ref={colegio} cantAulas={9} />
      {alumnos}
      <button onClick={ingresar}>Ingreso</button>
    </div>
  );
}

export default App;
