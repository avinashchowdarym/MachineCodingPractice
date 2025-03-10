import React, { useRef } from 'react'
import SmallInput from './SmallInput';

const InputBox = ({ number }) => {
    const ref = useRef(Array(number).fill(0));

    return (
        <div className='flex'>

            {Array(number).fill(1).map((_, index) => {
                
                return (
                    <SmallInput key={index} reference={(el) => ref.current[index] = el}
                       
                        onDone={() => {
                            if (index + 1 >= number) return; 
                            ref.current[index + 1].focus();
                        }}
                        goBack={() => {
                            if (index === 0) {
                                return;
                            }
                            ref.current[index - 1].focus();
                        }}
                    />
                )


            })

            }

        </div>
    )
}

export default InputBox