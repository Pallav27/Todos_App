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
    <div className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 gap-3 shadow-lg transition duration-200 ${
      todo.completed ? 'bg-green-200 border-green-400' : 'bg-white border-gray-300'
    }`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComp}
        className="cursor-pointer w-5 h-5 accent-green-500"
      />
      
      {/* Input Field - Larger with Smooth Animation */}
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-lg px-4 py-2 text-xl font-medium transition-all duration-300 ${
          isTodoEdit ? 'border-blue-400 ring-2 ring-blue-300' : 'border-transparent'
        }`}
        value={todoMsg}
        readOnly={!isTodoEdit}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      {/* Edit Button */}
      <button
        className="w-10 h-10 rounded-full text-lg flex items-center justify-center border border-blue-300 bg-blue-100 hover:bg-blue-200 transition duration-200 disabled:opacity-50"
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

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-10 h-10 rounded-full text-lg flex items-center justify-center border border-red-300 bg-red-100 hover:bg-red-200 text-red-600 transition duration-200"
      >
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
