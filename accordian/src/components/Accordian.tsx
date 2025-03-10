import { useState } from "react"

type AccordianType = {
    id: string
    title: string,
    content: string
}
type AccordianItems = {
    items: AccordianType[]
}



const Accordian : React.FC<AccordianItems>= ({items} : AccordianItems) => {
    const [AccordianIndex , setAccordianIndex] = useState< number | null>(null)
    const handleClick = (index : number) => {
        setAccordianIndex(index === AccordianIndex ? null : index);
        
    }
    
  return (
    <div className=''>
        {
            items?.map((item , index)=>{
                return(
                    <div className="flex flex-col items-center border-1 border-gray-950 gap-2 m-2 w-[900px] rounded-2xl" key={item.id}>
                        <div className="flex justify-between p-3 border-b border-gray-500 w-[90%]">
                            <span>{item.title}</span>
                            <button onClick={() => handleClick(index)}>{AccordianIndex === index ? '-' : '+'}</button>
                        </div>
                        {<div className="p-4 flex text-start" style={AccordianIndex === index ? {} : {display: 'none'}}>
                                {item.content}
                        </div>}

                    </div>
                )
            })
        }

    </div>
  )
}

export default Accordian