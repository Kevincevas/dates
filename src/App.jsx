// import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes= {pacientes}
          setPacientes= {setPacientes}
        />
        <ListadoPacientes
          //mandando el array de pacientes
          pacientes={pacientes}
        />
      </div>

    </div>
  )
}

export default App