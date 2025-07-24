import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface Props {
  children?: React.ReactNode;
}

export function MainLayout({ children }: Props) {
  const defaultOpen = localStorage.getItem("sidebar_state") !== "false";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar isOpen={defaultOpen} />
      <div
        id="content"
        className={cn(
          "ml-auto w-full max-w-full bg-[#F7F7F7]",
          "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
          "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
          "sm:transition-[width] sm:duration-200 sm:ease-linear",
          "flex h-svh flex-col",
          "group-data-[scroll-locked=1]/body:h-full",
          "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
        )}
      >
        {children ? children : <Outlet />}
      </div>
    </SidebarProvider>
  );
}
