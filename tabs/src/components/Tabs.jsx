import React, { useState } from 'react'

const Tabs = () => {
    const [TabNames] = useState(['Tab1','Tab2','Tab3','Tab4']);
    const [TabData] = useState(['This is Tab1 Data','This is Tab2 Data','This is Tab3 Data','This is Tab4 Data'])
    const [tab,setTab] = useState(0);

  return (
    
    <div>
        
        {
            TabNames.map((item,index)=>{
                return(
                    <div className='flex flex-row' key={index} onClick={()=>setTab(index)}>{item}</div>

                )
            }
            )
        }
        
        <div>{TabData[tab]}</div>
        

    </div>
  )
}

export default Tabs