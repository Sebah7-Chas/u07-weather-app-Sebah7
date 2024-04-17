// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GetForcast from './components/GetForcast'
import GetLocation from './components/GetLocation'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>The Weather</h1>
      <GetForcast />
      <GetLocation />
    </>
  )
}



export default App
