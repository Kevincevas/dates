import React from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes}) => {
  // console.log(pacientes)
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen ">

        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-2'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>

        <div className="w-auto md:h-screen overflow-y-scroll">
          { pacientes.map( (paciente) => { 
            return(
              <Paciente key={paciente.id} paciente={paciente}/> 
            )
            }) 
          }
        </div>

        

    </div>
  )
}
