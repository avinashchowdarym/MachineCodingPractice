
import { useEffect, useState } from 'react'
import './App.css'

// Questions I Asked or probable Questions

// differnce between debounce and  throttle
//


function App() {


  function debounce(value,delay){
    const [debounced,setDebounced] = useState(value);
    useEffect(()=>{
      let timer = setTimeout(()=>{
        setDebounced(value);
      },delay);
      
      return () => clearInterval(timer);
    },[value,delay]);
    return debounced;
}



  const [search,setSearch] = useState('');
  const [suggestions , setSuggestions] = useState([]);
  const deBounced = debounce(search,700);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${deBounced}`);
    const data = await response.json();
    console.log(data);
    setSuggestions(data.products);

  }
  useEffect(()=>{
    fetchData();
  },[deBounced])


  console.log(suggestions);
  return (
    <div className="App">
      Type Ahead
      <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
      {
        suggestions.length > 0 ? 
          <ul>
            {
              suggestions?.map((item,index)=>{
                return(
                  <li>
                    {item.title}
                  </li>
                )
              })
            }
          </ul>
         : <></>
      }
      <button> Search </button>
    </div>
  )
}

export default App
