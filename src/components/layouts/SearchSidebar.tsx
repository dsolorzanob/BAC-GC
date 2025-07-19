import { useState } from "react";
import { Search } from "lucide-react";
import { SidebarInput } from "@/components/ui/sidebar";

interface SearchSidebarProps {
  onSearch: (query: string) => void;
}

export function SearchSidebar({ onSearch }: SearchSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <SidebarInput
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-8"
      />
    </div>
  );
} 