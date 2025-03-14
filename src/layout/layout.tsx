import { AppSidebar } from "@/components/layout/app-sidebar"
import Header from "@/components/layout/header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
// import { AppSidebar } from "@/components/app-sidebar"

export default function Layout() {
  return (
    <div className="bg-[#18181B] text-white" >
        <Header/>
    <SidebarProvider className="" >
     <AppSidebar  />
        <SidebarTrigger />
      <main className="grow mt-16 px-2" >
      <Outlet />
      </main>
    </SidebarProvider>
    </div>
  )
}
