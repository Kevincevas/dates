import React, { useState, useEffect } from "react"
import { Error } from "./Error"

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  //pasando los datos del paciente seleccionado al formulario
  useEffect(() => {
    if(Object.keys(paciente).length > 0) {//forma de comprobar si un objeto tiene algo
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validacion del formulario
    if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
      // console.log('Hay almenos un campo vacio')
      setError(true)
      return
    }
    setError(false)

    //objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id) {
      // editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      // nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //pasando los pacientes y añadiendo el nuevo paciente al final
    //reiniciando el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-5'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          {error && <Error mensaje="Todos los campos son obligatorios"/>}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
            <input id='mascota' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="text" placeholder='Nombre de la mascota' value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input id='propietario' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="text" placeholder='Nombre de propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input id='email' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="email" placeholder='Email contacto propietario' value={email} onChange={ (e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
            <input id='alta' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="date" value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
            <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" cols="30" rows="10" placeholder='Describa los síntomas' value={sintomas} onChange={ (e) => setSintomas(e.target.value)}></textarea>
          </div>

          <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }/>

        </form>

    </div>
  )
}