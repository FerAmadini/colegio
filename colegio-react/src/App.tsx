import './App.css';
import Colegio from './Colegio/Colegio';


function App() {
  const alumnos =  [{nombre:"José", key:"0", edad:8}, 
                    {nombre:"Luján", key:"1", edad:6},
                    {nombre:"Fátima", key:"2", edad:5},
                    {nombre:"Eva", key:"3", edad:3},
                    {nombre:"Guadalupe", key:"4", edad:1},
                    {nombre:"Joaquín", key:"5", edad:8},
                    {nombre:"Luciano", key:"6", edad:5}]

  const docentes =[{nombre:0, key:0, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:1, key:1, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:2, key:2, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:3, key:3, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:4, key:4, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:5, key:5, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:6, key:6, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:7, key:7, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:8, key:8, catedra:['Lengua ', 'quimica ', 'fisica ']},
                   {nombre:9, key:9, catedra:['Lengua ', 'quimica ', 'fisica ']},
                  ]

  return (
    <div className="App">
      App
      <Colegio cantAulas={9} alumnosActuales={alumnos} plantelDocente={docentes} />
      {alumnos.map((alumno)=>
        <div>{alumno.nombre}</div>
      )}
      {docentes.map((docente)=>
        <div>{docente.nombre}, {docente.catedra}</div>
      )}
      
    </div>
  );
}

export default App;
