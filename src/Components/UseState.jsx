import { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({name}) => {

  const [state, setState] = useState({
    value:"",
    error:false,
    loading:false
  });

  // const [error, setError] = useState(false); 
  // const [value, setValue] = useState(""); 
  // const [loading, setLoading] = useState(false); 


  useEffect(() => {

    if(state.loading) {

      setTimeout(() => {

        if(state.value === SECURITY_CODE){
          setState({...state, loading:false , error:false})
          
          // setError(true)
        } else{
          setState({...state,error:true, loading:false})
        }
          
          // setLoading(false);       
      }, 2000)

    }



  }, [state.loading])
  

  return (
    <div className='bg-white p-8 w-[400px]'>
      <h2 className='block text-gray-700 text-lg font-bold mb-2'>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      <input type="text" 
        placeholder='Código de seguridad'
        className={`relative shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${state.error ? "border-red-500" : ""}`}
        value={state.value}
        onChange={(event)=> {
          setState({...state,value:event.target.value})
          // setValue( event.target.value)
        }}
        />
      {
        (state.error && !state.loading) && (
          <p className="text-red-500 text-xs italic absolute">Error: el codigo es incorrecto</p>
        )
      }
      {
        state.loading && (
          <p className="text-blue-500 text-xs italic absolute">Cargando...</p>
        )
      }
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
        onClick={() => setState({...state,loading: true})}
        >Comprobar</button>
    </div>
  )
}

export default UseState