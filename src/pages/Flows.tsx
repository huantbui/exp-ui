import { ConfirmDeleteModal } from "@/components/ConfirmDeleteModal";
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
import { EllipsisVertical } from "lucide-react";
import { FC, useState } from "react";

const FLOWS = [
  {
    id: "f-123",
    name: "abyssal",
    createdAt: new Date(),
    deployments: null,
  },
  {
    id: "f-456",
    name: "add",
    createdAt: new Date(),
    deployments: null,
  },
  {
    id: "f-789",
    name: "automation-deployment-parameters",
    createdAt: new Date(),
    deployments: null,
  },
];

const Flows: FC = () => {
  const [items, setItems] = useState(FLOWS);
  const handleDelete = (currentId: string) => {
    setItems((prev) =>
      prev.filter(({ id }) => {
        return id !== currentId;
      })
    );
  };
  return (
    <Card data-testid="page.flows">
      <CardHeader>
        <CardTitle>Flows</CardTitle>
        <CardDescription data-testid="page.flows.total">
          {items.length} Flows
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table data-testid="table.flows">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Deployments</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(({ id, name, createdAt }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">
                  <div>{name}</div>
                  <p className="text-sm text-muted-foreground flex">
                    Created {createdAt.toLocaleString()}
                  </p>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger className="sm" data-testid={`action.${id}`}>
                      <EllipsisVertical />
                    </PopoverTrigger>
                    <PopoverContent>
                      <ConfirmDeleteModal
                        title="Flow"
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

export default Flows;
