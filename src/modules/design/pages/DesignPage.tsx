import { Header } from "@/components/layouts/Header";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Search } from "lucide-react";

export function DesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
        </div>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">Diseño de Publicidades</div>
    </div>
  );
}
