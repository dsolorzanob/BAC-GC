import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeSwitch } from "./SwitchTheme";
import { SearchSidebar } from "./SearchSidebar";

export function MainLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        {/* Sidebar izquierdo */}
        <AppSidebar />
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Header arriba */}
          <Header>
            <div className="ml-auto flex items-center justify-end space-x-4">
              <SearchSidebar onSearch={() => {}} />
              <ThemeSwitch />
            </div>
          </Header>
          {/* Contenido principal (Outlet/Children) */}
          <main className="flex-1 bg-gray-50 p-6 ">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
