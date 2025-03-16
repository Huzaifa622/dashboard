
import { DataTable } from "./_components/data-table"
import { columns, Task } from "./_components/columns";
import BreadCrumbPage from "@/components/ui/breadcrumb-app";
 const taskData: Task[] = [
  {
    id: "1",
    matter: "Website Redesign",
    name: "Design Homepage",
    description: "Create wireframes and high-fidelity designs for the homepage.",
    dueDate: "2025-03-20",
  },
  {
    id: "2",
    matter: "Bug Fixing",
    name: "Fix Login Bug",
    description: "Resolve issue where users can't log in with Google OAuth.",
    dueDate: "2025-03-18",
  },
  {
    id: "3",
    matter: "API Documentation",
    name: "Update API Docs",
    description: "Document new API endpoints for the v2 release.",
    dueDate: "2025-03-25",
  },
  {
    id: "4",
    matter: "Marketing",
    name: "Write Blog Post",
    description: "Publish an article about React performance optimizations.",
    dueDate: "2025-03-22",
  },
  {
    id: "5",
    matter: "Infrastructure",
    name: "Deploy Staging Server",
    description: "Set up a new staging environment for testing.",
    dueDate: "2025-03-19",
  },
];


function Tasks() {
  return (
   <div>
    <BreadCrumbPage title="Tasks" />
    <DataTable columns={columns} data={taskData} />
   </div>
  )
}

export default Tasks