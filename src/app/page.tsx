import { Modal } from "@/components/Modal";
import ToDoTable from "@/components/ToDoTable";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" max-w-5xl mx-auto mt-10 ">
      {/* Add Task Section */}
      <section>
        <Modal title="Add New Task" Adding={true} >
          <Button
            variant="outline"
            className="w-full bg-fuchsia-600 text-lg px-2 py-1 text-stone-100"
          >
            Add TASK
            <FaPlus className="ml-4 text-2xl" />
          </Button>
        </Modal>
      </section>
      {/* Todo Table */}
      <section>
        <ToDoTable />
      </section>
    </main>
  );
}

