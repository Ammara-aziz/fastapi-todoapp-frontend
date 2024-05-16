import EditTask from "@/components/EditTask";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTask from "@/components/AddTask";
import { Todo } from "../../types";
// import { Label } from "@/components/ui/label"

// children: React.ReactNode;
//     title: string;
//     Adding?: boolean;
//     Editing?: boolean;
//     task: Todo;

export function Modal({
  children,
  title,
  Adding,
  Editing,
  task,
}: {
  children: React.ReactNode;
  title: string;
  Adding?: boolean;
  Editing?: boolean;
  task: Todo;
}) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {Adding && <AddTask />}
          {Editing && <EditTask task={task} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
