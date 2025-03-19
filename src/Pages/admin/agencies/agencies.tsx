import { DataTable } from "./_components/data-table";
import { Agency, columns } from "./_components/columns";
import BreadCrumbPage from "@/components/ui/breadcrumb-app";
const agenciesData: Agency[] = [
  {
    id: "1",
    name: "Website Redesign",
    totalCases: 1,
    totalAgents: 4, // Assuming 1 agent per task
  },
  {
    id: "2",
    name: "Bug Fixing",
    totalCases: 1,
    totalAgents: 11,
  },
  {
    id: "3",
    name: "API Documentation",
    totalCases: 1,
    totalAgents: 13,
  },
  {
    id: "4",
    name: "Marketing",
    totalCases: 1,
    totalAgents: 15,
  },
  {
    id: "5",
    name: "Infrastructure",
    totalCases: 1,
    totalAgents: 21,
  },
];

function Agencies() {
  return (
    <div>
      <BreadCrumbPage title="Agencies" />
      <DataTable columns={columns} data={agenciesData} />
    </div>
  );
}

export default Agencies;
