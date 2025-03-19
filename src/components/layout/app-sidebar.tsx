import {
  Banknote,
  Calendar,
  ChartColumnBig,
  Home,
  Logs,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/super-admin/dashboard",
    icon: Home,
  },
  {
    title: "Tasks",
    url: "/super-admin/tasks",
    icon: Logs,
  },
  {
    title: "Activities",
    url: "/super-admin/activites",
    icon: Calendar,
  },
  {
    title: "Payments",
    url: "/super-admin/Payments",
    icon: Banknote,
  },
  {
    title: "Analytics",
    url: "/super-admin/Analytics",
    icon: ChartColumnBig,
  },
  {
    title: "Settings",
    url: "/super-admin/Settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-r-[#000] border-dashed"
    >
      <SidebarContent className="bg-sidebar text-sidebar-foreground">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-white" >Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className=" py-5 transition-all font-bold ease-linear "
                  >
                    <Link to={item.url}>
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
  );
}
