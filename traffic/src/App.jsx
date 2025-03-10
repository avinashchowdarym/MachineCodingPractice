import {useState,useEffect} from 'react'

const traffic = {
  red: {
    duration: 4000,
    next: 'yellow'
  },
  yellow: {
    duration: 500,
    next: 'green'
  },
  green: {
    duration: 3000,
    next: 'red'
  }
  

}


export default function App() {
  const [cuurentColor,setCurrentColor] = useState('red');



  useEffect(()=>{
    const {duration,next} = traffic[cuurentColor];
    let timeout = setTimeout(()=>{
      setCurrentColor(next);
    },duration);

    return () => clearTimeout(timeout);

  },[cuurentColor])

  return <div style={{gap:'5px'}}>
    <div style={{border: '1px solid black' , width:'20px' ,height:'20px',margin:'20px', backgroundColor:`${cuurentColor === 'red' ? 'red':'black'}`}}></div>
    <div style={{border: '1px solid black' , width:'20px' ,height:'20px',margin:'20px', backgroundColor:`${cuurentColor === 'yellow' ? 'yellow':'black'}`}}></div>
    <div style={{border: '1px solid black' , width:'20px' ,height:'20px',margin:'20px', backgroundColor:`${cuurentColor === 'green' ? 'green':'black'}`}}></div>

  </div>;
}
