import { Header } from "@/components/layouts/Header";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Search } from "lucide-react";

export const Dashboard = () => {
  return (
    <main className="flex-1 p-0 bg-gray-50 min-h-screen">
       <Header>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
        </div>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">Dashboard</div>
    </main>
  );
};
