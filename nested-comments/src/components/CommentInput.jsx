import React, { useState } from 'react'
import Input from './Input';

const CommentInput = ({ comment }) => {
    const [reply, setReply] = useState(false);
    const [commentsReplied, setCommentsReplied] = useState(comment.comments);
    const onComments = (commentBody) => {
        setCommentsReplied(prev => [commentBody,...prev]);
      }
    return (
        <div >
            <div className='w-3/4 border-zinc-500 p-4 border-1 gap-2' >

                <span>{comment.message}</span>
                <button className='border-1 cursor-pointer border-zinc-500 rounded-xl m-5 p-1.5' onClick={() => setReply(!reply)}>{!reply ? 'Reply' : 'Cancel'}</button>
                {reply && (
                    <Input onComments={onComments} />

                )}
                <div className='flex flex-col gap-4 m-15'>
                    {
                        commentsReplied?.map((comment) => {
                            return (
                                <CommentInput comment={comment}/>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CommentInput