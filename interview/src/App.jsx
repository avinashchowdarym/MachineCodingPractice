
import './App.css'
import FileView from './components/FileView'
import { dataEarth } from './data/data'


function App() {

  return (
   <div>
      <FileView data = {dataEarth}/>
   </div>
  )
}

export default App
