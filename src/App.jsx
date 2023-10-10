// import './App.css'
import React, { useState,useEffect } from 'react'
import Header from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {

  const inicial = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(inicial)
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes )) //tranformando el arreglo a string
  }, [pacientes])  

  const eliminarPaciente = (id) => {
    const pacientesActualizados =  pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados)
  }
  

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes= {pacientes}
          setPacientes= {setPacientes}
          paciente= {paciente}
          setPaciente= {setPaciente}
        />
        <ListadoPacientes
          //mandando el array de pacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente= {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App