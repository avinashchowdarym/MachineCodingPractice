
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import './index.css'

function App() {

  return (
    <div className='text-xl w-full flex flex-col justify-center items-center'>
        <Navbar/>
        <Todo/>
    </div>
  )
}

export default App
