import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CircleAlert } from "lucide-react";

interface ConfirmDeleteModalProps {
  title: "Flow" | "Deployment";
  id: string;
  name: string;
  handleDelete: () => any;
}

/**
 *
 * @param ConfirmDeleteModalProps
 * @returns a delete dialog modal with 2 actions: cancel or confirm
 */
export const ConfirmDeleteModal = ({
  title,
  id,
  name,
  handleDelete,
}: ConfirmDeleteModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" data-testid={`delete.${id}`}>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CircleAlert color="hsl(var(--destructive))" className="pr-1"/> Delete {title}
          </DialogTitle>
          <DialogDescription data-testid="delete.description">
            Are you sure you want to delete {name}?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter
          className="sm:justify-end"
          data-testid="delete.button-group"
        >
          <DialogClose asChild className="sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              data-testid={`delete.cancel.${id}`}
            >
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={handleDelete}
              data-testid={`delete.confirm.${id}`}
              variant="destructive"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
