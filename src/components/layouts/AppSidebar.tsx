import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavGroup } from "./NavGroup";
import { NavUser } from "./NavUser";
import { sidebarData } from "./data/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarContent>
        {sidebarData.navGroups.map((group) => ({
          ...group,
          items: group.items.map((item) => ({
            ...item,
            disabled: ['Dashboard', 'Settings', 'Configuración'].includes(item.title)
          }))
        })).map((props) => (
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
