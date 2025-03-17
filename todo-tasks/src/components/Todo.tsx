import { useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Calendar } from "@/components/ui/calendar"


type Todo = {
    id: number,
    task: string,
    isDone: boolean,
    // subtasks: Todo
}

const Todo = () => {
    const [task, setTask] = useState<string>('');
    // const [error,setError] = useState<string|null>('');
    const [todos, setTodos] = useState<Todo[]>([])
    const [completed, setCompleted] = useState<Todo[]>([]);
    const ref = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState<Date | undefined>(new Date())

    const handleClick = () => {
        setTodos(
            [{ id: Date.now(), task: task, isDone: false }, ...todos]
        )
        setTask('');

    }

    const handleCompleted = (id: Number) => {
        const newArr = todos.filter((task) => task.id !== id);
        setTodos(newArr);
        const compeltedArr = todos.filter((task) => task.id === id);
        setCompleted(prev => [...prev, ...compeltedArr]);
    }

    const handleDelete = (id: Number) => {
        const newArr = todos.filter((task) => task.id !== id);
        setTodos(newArr);
    }

    const handleEdit = (id: Number) => {
        const taskArr = todos.filter((task) => task.id === id);
        const updatedTodos = todos.filter((task) => task.id !== id);
        setTodos(updatedTodos);
        ref.current?.focus();
        if (taskArr) {
            const task_new = taskArr[0].task;
            setTask(task_new);
        }

    }


    return (
        <div className='flex flex-col mt-20 w-[50%]'>
            <div className='flex flex-row gap-8'>
                <Input autoFocus ref={ref} placeholder='add tasks' onKeyDown={(e) => e.key === 'Enter' ? handleClick() : ''} value={task} onChange={(e) => setTask(e.target.value)} />
                <Button variant='outline' onClick={handleClick} disabled={task.trim().length === 0}>Add Todo</Button>
                <Checkbox />
            </div>
            <div className='text-2xl mt-20'>Tasks</div>

            {todos.length !== 0 ? <div className=' mt-10 p-10 w-[50vw]'>
                {
                    todos?.map((todo) => {
                        return (
                            <div className="items-top flex justify-between items-center space-x-2 border-1 p-3 mt-3 border-gray-450" key={todo.id}>
                                {/* <input className='dark:bg-black border-white' type='checkbox' checked={todo.isDone} onChange={(e)=>handleCheckClick(e)}/> */}
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {todo.task}
                                    </label>
                                </div>
                                <div className='flex gap-2'>
                                     <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border shadow"
                                    />
                                    <Button className='p-2 text-green-500' variant='outline' size='icon' onClick={() => handleEdit(todo.id)}>
                                        <img src='https://i.pinimg.com/736x/34/58/a1/3458a165c47ea8a8cf61496d2162dd14.jpg' />
                                    </Button>
                                    <Button className='p-2 text-green-500' variant='outline' size='icon' onClick={() => handleDelete(todo.id)}>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3550/3550701.png' />
                                    </Button>
                                    <Button className='p-2 text-green-500' variant='outline' size='icon' onClick={() => handleCompleted(todo.id)}>✓</Button>
                                   
                                </div>

                            </div>
                        )
                    })
                }

            </div> : <div className='text-blue-200 m-auto mt-20'>Empty Tasks</div>}
            {completed.length !== 0 && <div className='mt-20 text-2xl'>Completed Tasks</div>
            }                {
                completed?.map((todo) => {
                    return (
                        <div className="items-top flex space-x-2 border-1 p-3 m-3 border-gray-450 rounded-xl" key={todo.id}>
                            {/* <Checkbox checked={todo.isDone} className='flex' /> */}
                            {/* <input className='dark:bg-black border-white' type='checkbox' checked={todo.isDone} onChange={(e)=>handleCheckClick(e)}/> */}
                            <div className="grid gap-1.5 leading-none">

                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    <s>{todo.task}</s>
                                </label>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Todo