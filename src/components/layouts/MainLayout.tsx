import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { Header } from './Header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ThemeSwitch } from './SwitchTheme';
import { SearchSidebar } from './SearchSidebar';

export function MainLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full relative">
        {/* Sidebar izquierdo - con z-index alto */}
        <div className="relative z-50">
          <AppSidebar />
        </div>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col relative">
          {/* Header arriba - con z-index alto */}
          <div className="relative z-40">
            <Header>
              <div className="ml-auto flex items-center justify-end space-x-4">
                <SearchSidebar onSearch={() => {}} />
                <ThemeSwitch />
              </div>
            </Header>
          </div>

          {/* Contenido principal (Outlet/Children) - con z-index bajo */}
          <main className="flex-1 bg-gray-50 p-6 relative z-0 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
