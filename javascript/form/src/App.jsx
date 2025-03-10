
import { useContext } from 'react'
import './App.css'
import StopWatch from './components/StopWatch'
import Tabs from './components/Tabs'
import { Dark } from './components/Context'

function App() {
  const { dark, setDark } = useContext(Dark);
  console.log(useContext(Dark));



  return (

    <div className="App">
      {/* <button onClick={toggleTheme} >darkmode</button> */}
      <StopWatch />
      <Tabs />
    </div>

  )
}

export default App
