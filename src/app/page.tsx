import { Modal } from "@/components/Modal";
import ToDoTable from "@/components/ToDoTable";


export default function Home() {
  return (
    <main className=" max-w-5xl mx-auto mt-10 ">
      {/* Add Task Section */}
      <section>
        <Modal />
      </section>
      {/* Todo Table */}
      <section>
        <ToDoTable/>
           </section>
    </main>
  );
}
