
import './App.css'
import folders from './data/data'

function App() {

  return (
    <div className='flex flex-col justify-center items-center mt-20 text-2xl text-green-300'>
      File Manager
      
      <div>
        {/* {folders?.map((folder)=>{
          <div key={folder.name}>{folder.name}</div>
        })} */}
      </div>
      
    </div>
  )
}

export default App
