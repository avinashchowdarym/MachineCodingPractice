import React from 'react'
import InputBox from './InputBox'

const Otp = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <InputBox number={10}/>
        <button className='border-1 bg-blue-500 w-60 border-radius-2xl p-2 m-5'>Submit </button>
    </div>
  )
}

export default Otp