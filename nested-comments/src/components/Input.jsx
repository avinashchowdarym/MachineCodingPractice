import React, { useState } from 'react'

const Input = ({onComments}) => {
    const [commentBody,setCommentBody] = useState();

    return (
        <div className='flex flex-col m-9 gap-4'>
            <input className='flex text-xl border-2 border-zinc-500 p-4 w-3/4 h-30 ' type='text' value={commentBody} placeholder='what are your thoughts ?' onChange={(e) => setCommentBody(e.target.value)} />
            <button onClick={() => {
                onComments({message: commentBody,comments: []})
                setCommentBody('')
            }} className='border-1 border-zinc-500 w-30 p-3 cursor-pointer'>Comment</button>
        </div>
    )
}

export default Input