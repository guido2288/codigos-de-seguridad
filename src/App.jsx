import ClassState from "./Components/ClassState"
import UseReducer from "./Components/UseReducer"
import UseState from "./Components/UseState"

function App() {


  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-slate-300">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
      <UseReducer name="UseReducer"/>
    </div>
  )
}

export default App
