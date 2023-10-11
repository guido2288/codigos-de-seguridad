import React from 'react'
import Loading from './Loading';

class ClassState extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error:false,
      loading:false,
    }
  }

  componentDidUpdate(){
    
    if(this.state.loading) {
      setTimeout(() => {
      
        this.setState({loading:false})
      
      }, 2000)
    }

  }

  render(){

    return (
      <div className='bg-white p-8 w-[400px]'>
          <h2 className='block text-gray-700 text-lg font-bold mb-2'>Eliminar {this.props.name}</h2>
          <p>Por favor, escribe el codigo de seguridad.</p>
          <input type="text" placeholder='Código de seguridad' className='relative shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'/>
          {
            this.state.error && (
            <p className="text-red-500 text-xs italic absolute">Error: el codigo es incorrecto</p>
            )
          }
          {
            this.state.loading && (
              <Loading />
            )
          }
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
            onClick={()=> this.setState({loading: !this.state.loading})}
          >
            Comprobar
          </button>
          
      </div>
    )

  }
}

export default ClassState