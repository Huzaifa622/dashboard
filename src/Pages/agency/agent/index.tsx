import BreadCrumbPage from "@/components/ui/breadcrumb-app"
import { DataTable } from "./_components/data-table"
import { columns, IAgents } from "./_components/columns";

const agents: IAgents[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
  },
  {
    id: "4",
    name: "Robert Brown",
    email: "robertbrown@example.com",
  },
  {
    id: "5",
    name: "Emily Davis",
    email: "emilydavis@example.com",
  },
  {
    id: "6",
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
  },
  {
    id: "7",
    name: "Sarah Miller",
    email: "sarahmiller@example.com",
  },
];

  
//   console.log(Subscription);
  
function Agents() {
  return (
    <div>
        <BreadCrumbPage title="Agents" />
        <DataTable columns={columns} data={agents} />
    </div>
  )
}

export default Agents