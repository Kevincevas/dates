import React from 'react'

export const Paciente = () => {
  return (
    <div className='bg-white m-3 shadow-md px-5 py-10 rounded-xl'>
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Kevin</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">kevin@gmail.com</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10/12/2023</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dignissimos sed, harum fugiat id assumenda earum error esse. Perspiciatis repellendus ratione architecto. Temporibus eos necessitatibus corporis sequi libero quas distinctio.</span>
          </p>

    </div>
  )
}
