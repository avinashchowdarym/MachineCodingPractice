
import './App.css'
import Carousel from './components/Carousel'
import { imageData } from './data/data'

function App() {

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      Image Custom Carousel
      <Carousel infinity ={false} imageData={imageData}/>
    </div>
  )
}

export default App
