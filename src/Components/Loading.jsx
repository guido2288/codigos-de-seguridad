import React from "react"

class Loading extends React.Component {

    componentWillUnMount(){

    }
  

  render() {
    return (
        <p className="text-blue-500 text-xs italic absolute">Cargando...</p>

    )
  }
}

export default Loading