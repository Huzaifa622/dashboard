// import Breadcrumb from "@/components/ui/breadcrumb"
import BreadCrumbPage from "@/components/ui/breadcrumb-app"
import NetProfit from "./_components/net-profit"
import Sales from "./_components/sales"

function Dashboard() {
  return (
    <div>
     <BreadCrumbPage title="Dashboard" />
    <div className="p-2 flex flex-wrap gap-4" >
      <NetProfit/>
      <Sales/>
    </div>
   </div>
  )
}

export default Dashboard