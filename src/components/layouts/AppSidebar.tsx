import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavGroup } from "./NavGroup";
import { NavUser } from "./NavUser";
import { sidebarData } from "./data/sidebar";
import logo from "@/assets/logos/bac-logo.svg";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <img src={logo} alt="logo" className="w-full h-10" />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups
          .map((group) => ({
            ...group,
            items: group.items.map((item) => ({
              ...item,
              disabled: ["Dashboard", "Settings", "Configuración"].includes(
                item.title
              ),
            })),
          }))
          .map((props) => (
            <NavGroup key={props.title} {...props} />
          ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
