import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './TestComponent'

const testObject = { name: "musa", brother: "mohammed" }
const testList = ["gustav", "muzan"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestComponent prop={testList} />
    </>
  )
}

export default App
