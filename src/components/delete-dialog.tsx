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

interface DeleteDialogI {
  title: "Flow" | "Deployment";
  id: string;
  name: string;
  handleDelete: () => any;
}

/**
 * 
 * @param DeleteDialogI
 * @returns a delete dialog modal with 2 actions: cancel or confirm
 */
export const DeleteDialog = ({
  title,
  id,
  name,
  handleDelete,
}: DeleteDialogI) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" data-testid={`delete.${id}`}>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete {title}</DialogTitle>
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
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              // type="submit"
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
