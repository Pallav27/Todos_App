import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';
function TodoForm() {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();
    const add = (e)=>{
        e.preventDefault();
        if (!todo) {
            return;
        }
        addTodo({todo, completed: false});
        setTodo("");
    }

  return (
    <form onSubmit={add} classname='flex' >
        <input type='text'
        placeholder='Add a todo'
        classname='border-black border-2 w-full
        rounded-md p-2 px-3 outline-none duration-150
        bg-white/20 py-1.5' 
        value={todo}
        onChange={(e) =>{
            setTodo(e.target.value);
        }}/>

        <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-500 text-white shrink-0'>Add</button>
    </form>
)
}

export default TodoForm