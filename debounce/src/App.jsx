
import { useEffect, useState } from 'react'
import './App.css'

function App() {


  function useDebounced(value,delay=500) {

    const[debounce,setDebounce] = useState(value);

    useEffect(()=>{
      const timer = setTimeout(()=>{
        setDebounce(value);
      },delay)

      return ()=> clearTimeout(timer);

    },[value,delay])
    return debounce;
  }

  const [word, setWord] = useState('');
  const [suggestions,setSuggestions] = useState([]);
  const deBounce = useDebounced(word,700);

  // AbortController is used here to minimize racing conditions 

  // encodeURIComponent will make sure if param brokes or any symbol will be converted to %


  const fetchData = async () =>  {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(deBounce)}`)
      if(!response.ok) throw new Error('Network Error');
      const data = await response.json();
      setSuggestions(data?.products)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    fetchData();
  },[deBounce])


  return (
    <div>
      De Bounce 

      <input className='input' type='text'  onChange={(e)=> setWord(e.target.value)}/>
      {
        suggestions.length > 0 && suggestions?.map((arr,index)=>{
          return(
            <div key={index}>
              {arr.title}
              </div>
          )
        })
      }
    </div>
  )
}

export default App
