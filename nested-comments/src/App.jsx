
import { useState } from 'react'
import './App.css'
import CommentInput from './components/CommentInput';
import Input from './components/Input';

function App() {
  const InitialComments = [
    {
      message: 'Hi There',
      comments: []
    },
    {
      message: 'Hi There 2',
      comments: []
    },
    {
      message: 'Hi There 3',
      comments: []
    }
  ]
  const [comments, setComments] = useState(InitialComments);

  const handleComment = (comment) => {
   setComments(prev => [comment,...prev])
  }

  const onComments = (commentBody) => {
    setComments(prev => [commentBody,...prev]);
  }

  // const handleAddComment = ({message: commentBody,comments: []}) => {
  //   setComments([commentBody, ...comments])
  //   setCommentBody({ id: '', message: '' });
  // }

  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-2xl gap-4'>Reddit Comment Section</h1>
      <Input onComments = {onComments} />
      <div className='flex flex-col gap-4 m-15'>
        {
          comments?.map((comment, index) => {
            return (
              <CommentInput comment={comment} />

            )
          })
        }
      </div>

    </div>
  )
}

export default App
