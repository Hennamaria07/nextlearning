'use client';
import React, {useEffect, useState} from 'react';

const DataFetch = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        (async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/todos');
              const data = await response.json();
              setTodos(data);
            } catch (error) {
             console.log(error.message);
            }
         })()
    }, []);
  return (
    <div>
        <h1>Data fetching Client Component</h1>
        <ul
        className="flex gap-5 justify-evenly items-center flex-wrap">
            {todos?.map(todo => (
                <li 
                key={todo.id}
                className="p-5 text-center bg-pink-500 w-56 h-32">{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}
1
export default DataFetch