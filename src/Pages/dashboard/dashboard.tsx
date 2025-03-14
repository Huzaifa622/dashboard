import Breadcrumb from "@/components/ui/breadcrumb"
import NetProfit from "./_components/net-profit"
import Sales from "./_components/sales"

function Dashboard() {
  return (
    <div>
    <Breadcrumb title="Dashboard" />
    <div className="p-2 flex gap-4" >
      <NetProfit/>
      <Sales/>
    </div>
   </div>
  )
}

export default Dashboard