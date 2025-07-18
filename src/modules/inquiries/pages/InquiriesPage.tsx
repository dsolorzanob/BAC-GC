import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import {  Shovel } from "lucide-react";

export function InquiriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header>
        <div className="ml-auto flex items-center space-x-4">
        <SearchSidebar onSearch={() => {}} />
          <ThemeSwitch />
        </div>
      </Header>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-4">
        <div className="text-2xl font-semibold text-gray-700">
        En construcción
        </div>
        <Shovel className="w-12 h-12 text-gray-500" />
      </div>
    </div>
  );
}
