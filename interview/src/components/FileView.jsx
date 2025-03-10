import React, { useState } from 'react'

const FileView = ({data}) => {
    const [open,setOpen] = useState(false);
  return (
    <div>
        <p style={{paddingLeft:'10px'}} onClick={()=>setOpen(!open)}>{data.name}
            {
               data.type === 'directory' &&  <span>{open ? '-' : '+'}</span>
            }
        </p>
        {console.log(data)}
        {
          open &&  data.type === 'directory' && 
                data.children.map((child,index)=>{
                    return(
                        <FileView data={child}/>
                    )
                    
                })
            
        }
    </div>
  )
}

export default FileView