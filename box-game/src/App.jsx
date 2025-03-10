
import './App.css'
import React, { useState, useEffect, useMemo, useRef } from 'react';
const App = () => {
  const BOX = [[1, 0, 1], [1, 1, 0], [1, 1, 1]];

  // flatten the box to an array 

  const data = BOX.flat(Infinity);
  let acc = 0;
  for (let i = 0; i < data.length; i++) {
    acc = acc + data[i];
  }
  console.log('accumulator', acc);
  console.log(data);
  const [selected, setSelected] = useState(new Set());
  const handleClick = (index) => {
    setSelected(prev => new Set(prev.add(index)));
  }
  console.log(selected);

  const handleDeSelect = () => {
    const keys = Array.from(selected.keys());

    setTimeout(() => {
      setInterval(() => {
        if (keys.length) {
          const current = keys.shift();
          setSelected((prev) => {
            const temp = new Set(prev);
            temp.delete(current);
            return temp;
          })
        }
      }, 500)
    }, 100);

  }
  useEffect(() => {
    if (selected.size >= acc) {
      handleDeSelect();
    }
  }, [selected])

  return (

    <div className='flex justify-center w-full h-screen items-center' style={{backgroundColor: 'black',
      backgroundImage: 'radial-gradient(gray 1px, transparent 0)',
      backgroundSize: '40px 40px',
      backgroundPosition: '-19px -19px'}}>
      <div className='grid grid-cols-3 '>
        {

          data.map((value, index) => {
            return (
              <div className={`${value === 1 ? 'border-1 border-gray-200 bg-gray-100 cursor-pointer' : 'hidden'} ${selected.has(index) ? 'bg-green-300' : ''} w-30 h-30 g-2 m-2 `} onClick={() => handleClick(index)}>

              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
