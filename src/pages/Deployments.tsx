import { DeleteDialog } from "@/components/delete-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical, Workflow } from "lucide-react";
import { FC, useState } from "react";

const DEPLOYMENTS = [
  {
    id: "d-123",
    status: "Not Ready",
    name: "default",
    slug: "json-input-bug",
  },
  {
    id: "d-234",
    status: "Ready",
    name: "grandparent",
    slug: "grandparent",
  },
  {
    id: "d-345",
    status: "Ready",
    name: "long-running-flow",
    slug: "long-running-flow",
  },
  {
    id: "d-456",
    status: "Not Ready",
    name: "minimal",
    slug: "minimal",
  },
  {
    id: "d-567",
    status: "Not Ready",
    name: "randos",
    slug: "randos",
  },
];

const Deployments: FC = () => {
  const [items, setItems] = useState(DEPLOYMENTS);
  const handleDelete = (currentId: string) => {
    setItems((prev) =>
      prev.filter(({ id }) => {
        return id !== currentId;
      })
    );
  };
  return (
    <Card data-testid="page.deployments">
      <CardHeader>
        <CardTitle>Deployments</CardTitle>
        <CardDescription data-testid="page.deployments.total">
          {items.length} Deployments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table data-testid="table.deployments">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Deployment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(({ id, name, status, slug }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">
                  <div>{name}</div>
                  <p className="text-sm text-muted-foreground flex">
                    <Workflow className="w-4 h-4" />
                    {slug}
                  </p>
                </TableCell>
                <TableCell>{status}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger className="sm" data-testid={`action.${id}`}>
                      {/* <Button variant="outline" size="icon" data-testid={`action.${id}`}> */}
                      <EllipsisVertical />
                      {/* </Button> */}
                    </PopoverTrigger>
                    <PopoverContent>
                      <DeleteDialog
                        title="Deployment"
                        id={id}
                        name={name}
                        handleDelete={() => handleDelete(id)}
                      />
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Deployments;
