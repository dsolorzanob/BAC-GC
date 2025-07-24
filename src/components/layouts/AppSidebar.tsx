import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavGroup } from "./NavGroup";
import { NavUser } from "./NavUser";
import { sidebarData } from "./data/sidebar";
import logo from "@/assets/logos/bac-logo.svg";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  isOpen?: boolean;
}

function SidebarContentWithConditionalBg() {
  const { state } = useSidebar();
  
  return (
    <SidebarContent className={state === "collapsed" ? "bg-primary-dark text-white" : ""}>
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
  );
}

export function AppSidebar({ isOpen, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <img src={logo} alt="logo" className="w-full h-10" />
      </SidebarHeader>
      <SidebarContentWithConditionalBg />
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
