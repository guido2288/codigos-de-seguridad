import { useEffect } from "react";
import { useState } from "react";

const UseState = ({name}) => {

  const [error, setError] = useState(false); 

  const [loading, setLoading] = useState(false); 

  useEffect(() => {

    if(loading) {
      setTimeout(() => {
      
        setLoading(false);
      
      }, 2000)
    }
    
  }, [loading])
  

  return (
    <div className='bg-white p-8 w-[400px]'>
      <h2 className='block text-gray-700 text-lg font-bold mb-2'>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      <input type="text" placeholder='Código de seguridad' className='relative shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'/>
      {
        error && (
          <p className="text-red-500 text-xs italic absolute">Error: el codigo es incorrecto</p>
        )
      }
      {
        loading && (
          <p className="text-blue-500 text-xs italic absolute">Cargando...</p>
        )
      }
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
        onClick={() => setLoading(!loading)}
        >Comprobar</button>
    </div>
  )
}

export default UseState