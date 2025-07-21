import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { ReusableFilters } from "@/components/ui/ReusableFilters";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Users {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  [key: string]: string | number;
}

const data: Users[] = [
  { id: 1,
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@gmail.com",
    rol: "Administrador",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    email: "maria.gomez@gmail.com",
    rol: "Usuario",
  },
];

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "nombre",
    label: "Nombre",
  },
  { key: "apellido", label: "Apellido" },
  { key: "email", label: "Email" },
  { key: "rol", label: "Rol" },
];

export default function UserList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = 20;

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tipo, setTipo] = useState("");

  const handleFilter = () => {
    console.log({ fromDate, toDate, tipo });
  };

  const handleDownload = () => {
    console.log("Descargar reporte...");
  };

  return (
    <div className="min-h-screen">
       <Header>
        <div className="ml-auto flex items-center justify-end space-x-4">
          <SearchSidebar onSearch={() => {}} />
          <ThemeSwitch />
        </div>
      </Header>

      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-primary">Usuarios</h1>
            <div className="text-sm text-muted-foreground">Home</div>
          </div>
          <Button 
            variant="filled" 
            color="info"
            onClick={() => navigate("/admin/usuarios/crear")}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Crear Usuario
          </Button>
        </div>
      </div>
      
      {/* Tabla */}
      <div className="px-6 mt-4 pb-10">
        <ReusableTable<Users>
          onRowClick={(row) => {
            // Redirigir a la página de editar usuario con el ID del usuario
            // Por ahora usamos el email como ID, pero deberías usar un ID real
            const userId = row.id.toString();
            navigate(`/admin/usuarios/editar/${userId}`);
          }}
          columns={columns}
          data={data}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}
