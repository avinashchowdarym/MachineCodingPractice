import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [pause,setPause] = useState(false);

    useEffect(() => {
        let timeout = null;
       if(!pause)
             timeout = setInterval(() => {
            setTimer(timer + 10);
        }, 10)
        else{
            clearInterval(timeout);
        }


        return () => clearInterval(timeout);
    },[timer,pause]);

    return (
        <div>
            <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
            <span>
                {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((timer / 10) % 100)).slice(-2)}
            </span>
            <button onClick={()=>setPause(!pause)} >pause</button>
        </div>
    )
}

export default StopWatch