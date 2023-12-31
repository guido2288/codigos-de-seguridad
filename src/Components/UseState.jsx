import React, { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "UseState";

const UseState = ({name}) => {

  const [state, setState] = useState({
    value:"",
    error:false,
    loading:false, 
    deleted:false,
    confirmed:false,
  });

  const onConfirm = () => {
    setState({...state, loading:false , error:false , confirmed:true});
  };
  const onError = () => {
    setState({...state,error:true, loading:false})
  };
  const onWrite = (event) => {
    setState({...state,value:event})
  };
  const onCheck = () => {
    setState({...state,loading: true})
  };
  const onDelete = () => {
    setState({...state, deleted:true})
  };
  const onReset = () => {
    setState({...state, confirmed:false, deleted:false , value:""})
  }

  useEffect(() => {

    if(state.loading) {

      setTimeout(() => {

        if(state.value === SECURITY_CODE){
          onConfirm();
        } else{
          onError();
        }
          
      }, 2000)

    }

  }, [state.loading])
  
  if(!state.deleted && !state.confirmed){
    return (
      <div className='bg-white p-8 w-[400px]'>
        <h2 className='block text-gray-700 text-lg font-bold mb-2'>Eliminar {name}</h2>
        <p>Para eliminar escribe "UseState".</p>
        <input type="text" 
          placeholder='Código de seguridad'
          disabled= {state.loading}
          className={`relative shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${state.error ? "border-red-500" : ""}`}
          value={state.value}
          onChange={(event)=> {
            onWrite(event.target.value)
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
          onClick={onCheck}
          >Comprobar</button>
      </div>
    );
  }else if(state.confirmed && !state.deleted) {
    return (
      <div className='bg-white p-8 w-[400px]'>
        <p>¿Seguro que quieres eliminar UseState?</p>
        <div className="flex gap-8">
          <button 
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={onDelete}
            >Si, eliminar</button>
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={onReset}
          >No, volver</button>
        </div>
      </div>
    )
  } else{
    return (
      <div className='bg-white p-8 w-[400px]'>
        <p>Eliminado con exito!</p>
        <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={onReset}
          >Recuperar UseState</button>
      </div>
    )
  }



}

export default UseState