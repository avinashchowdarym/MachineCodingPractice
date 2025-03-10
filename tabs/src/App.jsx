import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'
import Otp from './components/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center bg-gray-100 text-white h-screen'>
     <Otp/>
    </div>
  )
}

export default App
