import { Banknote, Calendar, ChartColumnBig, Home,  Logs, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Tasks",
    url: "tasks",
    icon: Logs ,
  },
  {
    title: "Activities",
    url: "activites",
    icon: Calendar,
  },
  {
    title: "Payments",
    url: "Payments",
    icon: Banknote ,
  },
  {
    title: "Analytics",
    url: "Analytics",
    icon: ChartColumnBig ,
  },
  {
    title: "Settings",
    url: "Settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-r-[#27272A] border-dashed" >
      <SidebarContent className="bg-[#09090B] text-white"  >
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-white" >Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-[#2d2d30] py-5 transition-all font-bold ease-linear hover:text-white">
                    <Link to={item.url.toLocaleLowerCase()}>
                      <item.icon size={25} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
