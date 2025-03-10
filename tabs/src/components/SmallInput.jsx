import React from 'react'

const SmallInput = ({reference,onDone,goBack}) => {
  return (
    <div className='flex flex-row gap-2 gap-10'>
        <input className='bg-red-100 border-1 m-1 w-10 h-10 text-gray-500 ' maxLength={1} type='text' ref={reference} 
        onChange={(e)=>{
            console.log(e.key);
            if(!e.target.value || e.key === 'Backspace') goBack();
            let val = e.target.value;
            if(val === '0' || val === '1' || val === '2'|| val === '3'|| val === '4'|| val === '5'|| val === '6'|| val === '7'|| val === '8' || val === '9' || e.key==='space'){
                onDone();
            }
        }}
        
        />
    </div>
  )
}

export default SmallInput