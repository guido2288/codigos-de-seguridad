import  { useEffect, useReducer } from "react";

const SECURITY_CODE = "UseReducer";

const UseReducer = ({name}) => {

const initialState = {
  error:false,
  loading:false, 
  deleted:false,
  confirmed:false,
  value:"",
};

const actionTypes = {
  error:"ERROR",
  check:"CHECK",
  confirm:"CONFIRM",
  delete:"DELETE",
  reset:"RESET",
  write:"WRITE",
}

const reducer = (state, action) => {
  if(action.type === "ERROR") {
      return {...state,error:true,loading:false};
  }

  if(action.type === "CHECK"){
      return{...state, loading:true};
  }

  if(action.type === "CONFIRM"){
      return {...state, loading:false , error:false , confirmed:true}
  }

  if(action.type === "DELETE"){
      return {...state, deleted:true}
  }

  if(action.type === "RESET"){
      return {...state, confirmed:false, deleted:false , value:""}
  }

  if(action.type === "WRITE"){
    return {...state, value: action.payload}
}

  return initialState;
};

const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {

    if(state.loading) {

      setTimeout(() => {

        if(state.value === SECURITY_CODE){
          dispatch({type: actionTypes.confirm});
        } else{
          dispatch({type:actionTypes.error});
        }
          
      }, 2000)

    }

  }, [state.loading])
  
  if(!state.deleted && !state.confirmed){
    return (
      <div className='bg-white p-8 w-[400px]'>
        <h2 className='block text-gray-700 text-lg font-bold mb-2'>Eliminar {name}</h2>
        <p>Para eliminar escribe "UseReducer".</p>
        <input type="text" 
          placeholder='Código de seguridad'
          disabled= {state.loading}
          className={`relative shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${state.error ? "border-red-500" : ""}`}
          value={state.value}
          onChange={(event)=> {
            dispatch({type:actionTypes.write, payload:event.target.value});
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
          onClick={()=>dispatch({type:actionTypes.check})}
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
            onClick={()=>dispatch({type:actionTypes.delete})}
            >Si, eliminar</button>
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={()=>dispatch({type:actionTypes.reset})}
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
            onClick={()=>dispatch({type:actionTypes.reset})}
          >Recuperar UseState</button>
      </div>
    )
  }

}

export default UseReducer