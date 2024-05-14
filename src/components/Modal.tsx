import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTask from "@/components/AddTask";
// import { Label } from "@/components/ui/label"

export function Modal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full bg-fuchsia-600 text-lg px-2 py-1 text-stone-100"
          >
            Add TASK
            <FaPlus className="ml-4 text-2xl" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ADD NEW TASK</DialogTitle>
          </DialogHeader>
          <AddTask />
        </DialogContent>
      </Dialog>
    </div>
  );
}
