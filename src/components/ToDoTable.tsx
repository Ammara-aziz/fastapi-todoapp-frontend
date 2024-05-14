import Task from "@/components/Task";
import { Todo } from "../../types";

function ToDoTable() {
  const todo_list: Todo[] = [
    { id: 1, content: "Task 1", is_completed: false },
    { id: 2, content: "Task 2", is_completed: false },
    { id: 3, content: "Task 3", is_completed: false },
    { id: 4, content: "Task 4", is_completed: false },
  ];
  return (
    <div>
      <table className="w-full">
        <thead className="grid  mt-5">
          <tr className="flex justify-between items-center px-2 py-1 mt-1 bg-neutral-100 rounded-sm shadow-md">
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo_list.map((task: Todo) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoTable;
