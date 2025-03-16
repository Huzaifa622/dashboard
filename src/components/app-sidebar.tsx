import * as React from "react"
import {
  AudioWaveform,


  Command,

  GalleryVerticalEnd,
 
} from "lucide-react"


// import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/theme-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { Banknote, Calendar, ChartColumnBig, Home,  Logs, Settings } from "lucide-react"
// This is sample data.


const teams= [
  {
    name: "Firm Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Firm Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
]
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-r-sidebar-border" >
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link to={item.url.toLocaleLowerCase()}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter> 
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
