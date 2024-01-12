import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './TestComponent'
import Clicker from './Clicker'
import Greetings from './Greetings'

const testObject = { name: "musa", brother: "mohammed" }
const testList = ["gustav", "muzan"];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Greetings />
      <Clicker message="btn 1 is clicked" buttonText="btn 1" />
      <p></p>
      <Clicker message="btn 2 is clicked" buttonText="btn 2" />
      {/* <TestComponent prop={testList} /> */}
    </>
  )
}

export default App
