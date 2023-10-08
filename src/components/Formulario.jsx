import React from 'react'

export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-5'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
            <input id='mascota' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="text" placeholder='Nombre de la mascota'/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input id='propietario' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="text" placeholder='Nombre de propietario'/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input id='email' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="email" placeholder='Email contacto propietario'/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
            <input id='alta' className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" type="date"/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
            <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-grey-600 rounded-md" cols="30" rows="10" placeholder='Describa los síntomas'></textarea>
          </div>

          <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value='Agregar paciente' />

        </form>

    </div>
  )
}
