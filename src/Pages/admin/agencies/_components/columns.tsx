import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Agency = {
  id: string;
  totalCases: number;
  name: string;
  totalAgents: number;
  // Format: YYYY-MM-DD
};

export const columns: ColumnDef<Agency>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },

  {
    accessorKey: "totalCases",
    header: "Total Cases",
    cell: ({ row }) => (
      <div className="text-gray-600">{row.getValue("totalCases")}</div>
    ),
  },
  {
    accessorKey: "totalAgents",
    header: "Total  Agents",
    cell: ({ row }) => (
      <div className="text-gray-600">{row.getValue("totalAgents")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      // const task = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Copy Task ID
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem>Edit Task</DropdownMenuItem> */}
            <DropdownMenuItem>View Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
