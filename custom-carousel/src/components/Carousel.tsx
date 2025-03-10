
import { useEffect, useState } from "react"
import { ChevronLeft , ChevronRight } from "lucide-react";

const Carousel = ({infinity , imageData} :{infinity:boolean;imageData : string[]}) => {

    const [index, setIndex] = useState(0);

    // const [infinity,setInfinity] = useState(false);

    useEffect(()=>{
       infinity && setTimeout(()=>{
            if(index===imageData.length-1){
                setIndex(0);
            }
            else{
                setIndex(index+1);
            }
        },1000)
    },[index,infinity])


    const handlePrevious = () => {
        if (index === 0) {
            setIndex(imageData.length - 1);
        }
        else setIndex(index - 1);

    }

    const handleNext = () => {
        if (index === imageData.length - 1) {
            setIndex(0);
        }
        else setIndex(index + 1);
    }
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            Carousel
            <div className="flex flex-row ">
                {!infinity && <button onClick={handlePrevious}><ChevronLeft/></button>}

                <img src={imageData[index]} className="w-100 h-100" />
                {!infinity && <button onClick={handleNext}><ChevronRight/></button>}

            </div>
        </div>
    )
}

export default Carousel