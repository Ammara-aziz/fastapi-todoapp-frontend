import { Todo } from "../../types";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuCheckSquare } from "react-icons/lu";
import { Tooltip } from "@radix-ui/react-tooltip";

function Task({ task }: { task: Todo }) {
  return (
    <div>
      <tr className="flex justify-between items-center border-b border-gray-200">
        dodata
        <td>{task.content}</td>
        <td className="flex gap-x-2">
          <Tooltip>
            <FaRegEdit size={24} className="text-blue-500" />
          </Tooltip>

          <Tooltip>
            <LuCheckSquare
              size={24}
              className={`${
                task.is_completed ? "text-teal-600" : "text-gray-500"
              }`}
            />
          </Tooltip>

          <Tooltip>
            <RiDeleteBin6Line size={24} className="text-red-600" />
          </Tooltip>
        </td>
      </tr>
    </div>
  );
}

export default Task;
