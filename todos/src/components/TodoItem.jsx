import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEdit(false);
  };

  const toggleComp = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className={`flex items-center justify-between border border-black/10 rounded-lg px-4 py-2 gap-3 shadow-md text-black bg-lightgreen transition duration-200 ${todo.completed ? 'line-through text-gray-400 bg-green-200' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComp}
        className="cursor-pointer w-5 h-5"
      />
      
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-lg px-2 py-1 ${isTodoEdit ? 'border-blue-400' : 'border-transparent'}`}
        value={todoMsg}
        readOnly={!isTodoEdit}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-50 hover:bg-gray-100 transition duration-150 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEdit) {
            editTodo();
          } else {
            setIsTodoEdit((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEdit ? '✔' : '✏'}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-red-300 justify-center items-center bg-red-50 hover:bg-red-100 text-red-600 transition duration-150"
      >
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
