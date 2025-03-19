import * as React from "react";
import { AudioWaveform, Command, FolderOpen, GalleryVerticalEnd, User, Users } from "lucide-react";

// import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/theme-switcher";
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
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import {
 
  Calendar,
  ChartColumnBig,
  Home,
  Logs,
  Settings,
} from "lucide-react";
// This is sample data.

const teams = [
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
];


const items = [
  {
    title: "Dashboard",
    url: "/super-admin",
    icon: Home,
  },
  // {
  //   title: "Tasks",
  //   url: "/super-admin/tasks",
  //   icon: Logs,
  // },
  {
    title: "Agencies",
    url: "/super-admin/agencies",
    icon: Calendar,
  },
  // {
  //   title: "Payments",
  //   url: "/super-admin/Payments",
  //   icon: Banknote,
  // },
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


const agencyItems = [
  {
    title: "Dashboard",
    url: "/agency",
    icon: Home,
  },
  {
    title: "Subscription",
    url: "/agency/subscription",
    icon: Logs,
  },
  {
    title: "Agents",
    url: "/agency/agents",
    icon: User ,
  },
  {
    title: "Cases",
    url: "/agency/cases",
    icon: FolderOpen ,
  },
  {
    title: "Tasks",
    url: "/agency/tasks",
    icon: Logs,
  },
  {
    title: "Clients",
    url: "/agency/clients",
    icon: Users ,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const role = localStorage.getItem("role");
  
  return (
    <Sidebar collapsible="icon" {...props} className="border-r-sidebar-border">
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {role == "super-admin" &&
                items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title} asChild>
                      <Link to={item.url.toLocaleLowerCase()}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              {role == "agency" &&
                agencyItems.map((item) => (
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
  );
}
