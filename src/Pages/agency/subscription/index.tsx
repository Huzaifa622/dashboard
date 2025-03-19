import BreadCrumbPage from "@/components/ui/breadcrumb-app"
import { DataTable } from "./_components/data-table"
import { columns, ISubscription } from "./_components/columns";

const Subs: ISubscription[] = [
    {
      id: "1",
      duration: "1 month",
      active: 50,
      notActive: 10,
      noOfAgents: 20,
      noOfCasesPerAgent: 2.5,
    },
    {
      id: "2",
      duration: "3 months",
      active: 120,
      notActive: 25,
      noOfAgents: 40,
      noOfCasesPerAgent: 3,
    },
    {
      id: "3",
      duration: "6 months",
      active: 200,
      notActive: 40,
      noOfAgents: 60,
      noOfCasesPerAgent: 3.3,
    },
    {
      id: "4",
      duration: "9 months",
      active: 250,
      notActive: 50,
      noOfAgents: 80,
      noOfCasesPerAgent: 3.1,
    },
    {
      id: "5",
      duration: "12 months",
      active: 300,
      notActive: 60,
      noOfAgents: 100,
      noOfCasesPerAgent: 3,
    },
    {
      id: "6",
      duration: "18 months",
      active: 400,
      notActive: 80,
      noOfAgents: 120,
      noOfCasesPerAgent: 3.3,
    },
    {
      id: "7",
      duration: "24 months",
      active: 500,
      notActive: 100,
      noOfAgents: 150,
      noOfCasesPerAgent: 3.4,
    },
  ];

  
//   console.log(Subscription);
  
function Subscription() {
  return (
    <div>
        <BreadCrumbPage title="Subscription" />
        <DataTable columns={columns} data={Subs} />
    </div>
  )
}

export default Subscription