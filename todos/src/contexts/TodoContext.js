import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1,
          todo: "Learn React",
           completed: false 
     },
    ],

    addTodo:(todo) =>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
});

//its like switching on the context we created, and we can use it in any component we want
export const useTodo = () =>{
    return useContext(TodoContext);
}

//this Todoprovider will help the children to access the context

export const TodoProvider = TodoContext.Provider;

//TodoProvider is a component that provides the context to its children
//use context is a hook that allows you to use the context in a functional component
//TodoContext is the context that we created
//createContext is a function that creates a context
