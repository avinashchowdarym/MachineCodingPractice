import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from '@radix-ui/react-checkbox'

type Todo = {
    id: number,
    task: string,
    isDone: boolean,
    // subtasks: Todo
}

const Todo = () => {
    const [task,setTask] = useState<string>('');
    // const [error,setError] = useState<string|null>('');
    const [todos,setTodos] = useState<Todo[]>([])

    const handleClick = () => {
        // if(!task.trim()){
            
        // }
        
        setTodos(
            [{id: Date.now() , task: task , isDone: false},...todos]
        )
        setTask('');
    }
   
  return (
    <div className='flex flex-col mt-20'>
        <div className='flex flex-row gap-8'>
            <Input placeholder='add tasks' value={task} onChange={(e) => setTask(e.target.value)}/>
            <Button variant='outline' onClick={handleClick}>Add Todo</Button>
        </div>
    { todos.length !== 0 && <div className=' m-20 p-10 w-[50vw]'>
            {
                todos?.map((todo)=>{
                    return(
                        <div className = 'border-1 border-gray-450 p-3 m-4' key={todo.id}>
                            <div>
                                <Checkbox/>
                                <span>{todo.task}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>}

    </div>
  )
}

export default Todo