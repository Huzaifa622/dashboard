import BreadCrumbPage from "@/components/ui/breadcrumb-app"
import { DataTable } from "./_components/data-table"
import { columns,ICase } from "./_components/columns";

const cases: ICase[] = [
    {
      id: "1",
      caseName: "Estate Dispute",
      startDate: "2024-01-15",
      clientName: "John Doe",
    },
    {
      id: "2",
      caseName: "Contract Breach",
      startDate: "2024-02-20",
      clientName: "Jane Smith",
    },
    {
      id: "3",
      caseName: "Intellectual Property Dispute",
      startDate: "2024-03-10",
      clientName: "Alice Johnson",
    },
    {
      id: "4",
      caseName: "Personal Injury Claim",
      startDate: "2024-04-05",
      clientName: "Robert Brown",
    },
    {
      id: "5",
      caseName: "Employment Discrimination",
      startDate: "2024-05-12",
      clientName: "Emily Davis",
    },
    {
      id: "6",
      caseName: "Real Estate Litigation",
      startDate: "2024-06-18",
      clientName: "Michael Wilson",
    },
    {
      id: "7",
      caseName: "Divorce Settlement",
      startDate: "2024-07-22",
      clientName: "Sarah Miller",
    },
  ];
function Cases() {
  return (
    <div>
        <BreadCrumbPage title="Cases" />
        <DataTable  columns={columns} data={cases} />
    </div>
  )
}

export default Cases