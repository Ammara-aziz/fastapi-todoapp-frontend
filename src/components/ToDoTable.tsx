import Task from "@/components/Task";
import { Todo } from "../../types";

export default async function TodoTable() {
  const response = await fetch("http://localhost:8000/todos/", {
    cache: "no-store",
  });
  const data = await response.json();
  const todo_list: Todo[] = data.sort((a: Todo, b: Todo) => a.id - b.id);

  return (
    <table className="w-full">
      <thead className="flex mt-5 w-full">
        <tr className="w-full flex justify-between items-center px-2 py-1 bg-gray-100 shadow-md">
          <th><h1 className="text-2xl font-bold">Todo List</h1></th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {todo_list.map((task: Todo) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}
