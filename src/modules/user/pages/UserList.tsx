import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash, Search } from "lucide-react";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";

interface Users {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  [key: string]: string | number;
}

const data: Users[] = [
  {
    id: 1,
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
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
    email: "pedro.gomez@gmail.com",
    rol: "Usuario",
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Gomez",
    email: "ana.gomez@gmail.com",
    rol: "Usuario",
  },
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

  const handleView = (user: Users) => {
    console.log("Ver usuario:", user);
    // Aquí puedes agregar la lógica para ver el detalle del usuario
    // Por ejemplo, abrir un modal o navegar a una página de detalle
  };

  const handleEdit = (user: Users) => {
    console.log("Editar usuario:", user);
    // Navegar a la página de editar usuario
    navigate(`/admin/usuarios/editar/${user.id}`);
  };

  const handleDelete = (user: Users) => {
    console.log("Eliminar usuario:", user);
    // Aquí puedes agregar la lógica para eliminar el usuario
    // Por ejemplo, mostrar un modal de confirmación antes de eliminar
    if (
      confirm(
        `¿Estás seguro de que quieres eliminar al usuario ${user.nombre} ${user.apellido}?`
      )
    ) {
      // Llamada a API para eliminar el usuario
      console.log("Usuario eliminado:", user.id);
    }
  };

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
    {
      key: "acciones",
      label: "Acciones",
      render: (val: any, row: Users) => (
        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(row);
            }}
            variant="ghost"
            color="info"
            size="sm"
            title="Editar"
          >
            <Edit className="h-3 w-3 mr-1" />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(row);
            }}
            variant="ghost"
            color="error"
            size="sm"
            title="Eliminar"
          >
            <Trash className="h-3 w-3 mr-1" />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleView(row);
            }}
            variant="ghost"
            color="secondary"
            className="bg-gray-100"
            size="sm"
            title="Ver"
          >
            Ver
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header>
        <div className="ml-auto flex items-center justify-end space-x-4">
          {/* Botón de búsqueda para móvil */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // Aquí puedes agregar la lógica para abrir un modal de búsqueda o navegar a una página de búsqueda
              console.log("Abrir búsqueda en móvil");
            }}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* SearchSidebar para desktop */}
          <div className="hidden md:block">
            <SearchSidebar onSearch={() => {}} />
          </div>

          <ThemeSwitch />
        </div>
      </Header>

      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <CustomBreadcrumb
              items={[{ label: "Home", href: "/admin/usuarios" }]}
            />
            <h1 className="text-2xl font-bold text-primary">Usuarios</h1>
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
