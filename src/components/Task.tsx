"use client";

import { Todo } from "../../types";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuCheckSquare } from "react-icons/lu";
import ToolTip from "./ToolTip";
import { Modal } from "./Modal";
import { delete_todo, status_change } from "@/actions/actions";
import toast from "react-hot-toast";

export default function Task({ task }: { task: Todo }) {
  const handleStatus = async () => {
    const response = await status_change(
      task.id,
      task.content,
      task.is_completed
    );

    if (response.status == "success") {
      toast.success(response.message);
    } else if (response.status == "error") {
      toast.error(response.message);
    }
  };

  const handleDelete = async () => {
    const response = await delete_todo(task.id);
    if (response.status == "error") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };
  return (
    <div className="">
      <tr className="flex justify-between items-center border-b border-gray-300 px-2 py-2">
        <td>{task.content}</td>
        <td className="flex gap-x-2">
          <ToolTip tooltip_content="Mark as completed">
            <button onClick={handleStatus}>
              <LuCheckSquare
                size={24}
                className={`${
                  task.is_completed ? "text-teal-600" : "text-gray-300"
                }`}
              />
            </button>
          </ToolTip>

          <Modal title="Edit Task" Editing={true} task={task}>
            <ToolTip tooltip_content="Edit Task">
              <FaRegEdit size={24} className="text-blue-500" />
            </ToolTip>
          </Modal>

          <ToolTip tooltip_content="Delete task">
            <button onClick={handleDelete}>
              <RiDeleteBin6Line size={24} className="text-red-600" />
            </button>
          </ToolTip>
        </td>
      </tr>
    </div>
  );
}
