'use client';

import Task from "@/components/Task";
import { Todo } from "../../types";
import { useEffect, useState } from "react";


export default function TodoTable() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:8000/todos/", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodos(data.sort((a: Todo, b: Todo) => a.id - b.id));
    } catch (error) {
      setError("Failed to fetch todos.");
    }
  }

  fetchTodos();
}, []);

if (error) {
  return <div>Error: {error}</div>;
}
  return (
    <table className="w-full">
      <thead className="flex mt-5 w-full">
        <tr className="w-full flex justify-between items-center px-2 py-1 bg-gray-100 shadow-md">
          <th>
            <h1 className="text-2xl font-bold">Todo List</h1>
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((task: Todo) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}
function setTodos(arg0: any) {
  throw new Error("Function not implemented.");
}

function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

