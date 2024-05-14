import React from "react";

function AddTask() {
  return (
    <div>
      <form className="flex flex-col gap-x-3 w-full">
        <input
          type="text"
          placeholder="Add Task Here"
          minLength={3}
          maxLength={54}
          required
          name="add_task"
          className="w-full px-2 py-1 border border-gray-100 rounded-md"
        />
        <button className="px-2 py-1 ">Save</button>
      </form>
    </div>
  );
}

export default AddTask;
