import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";
import { ReusableFilters } from "@/components/ui/ReusableFilters";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { RowActions } from "@/components/ui/RowActions";

type TableColumn<T> = {
  key: keyof T | string;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

interface Users {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  [key: string]: string | number;
}

export default function UserList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = 4;

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState("");

  const data: Users[] = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      email: "juan@gmail.com",
      rol: "Admin",
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Gomez",
      email: "maria@gmail.com",
      rol: "Usuario",
    },
    {
      id: 3,
      nombre: "Pedro",
      apellido: "Gomez",
      email: "pedro@gmail.com",
      rol: "Usuario",
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "Gomez",
      email: "ana@gmail.com",
      rol: "Usuario",
    },
  ];

  const handleView = (user: Users) => {
    console.log("Ver usuario:", user);
  };

  const handleEdit = (user: Users) => {
    navigate(`/admin/usuarios/editar/${user.id}`);
  };

  const handleDelete = (user: Users) => {
    const confirmDelete = confirm(
      `¿Eliminar a ${user.nombre} ${user.apellido}?`
    );
    if (confirmDelete) {
      console.log("Usuario eliminado:", user.id);
    }
  };

  const handleFilter = () => {
    console.log("Filtrando por:", fromDate, toDate, type);
  };

  const handleDownload = () => {
    console.log("Descargando reporte...");
  };

  const columns: TableColumn<Users>[] = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "apellido", label: "Apellido" },
    { key: "email", label: "Email" },
    { key: "rol", label: "Rol" },
  ];

  return (
    <>
      <div className="px-6 mt-6">
        <CustomBreadcrumb items={[{ label: "Home", href: "/" }]} />
        <h1 className="text-2xl font-bold text-primary">Usuarios</h1>
      </div>

      {/* Filtros para desktop */}
      <div className="px-6 mt-6 hidden md:block">
        <ReusableFilters
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          selectedOption={type}
          onSelectChange={setType}
          selectOptions={[
            { label: "Administrador", value: "Admin" },
            { label: "Usuario", value: "Usuario" },
          ]}
          onFilter={handleFilter}
          onDownload={handleDownload}
        />
      </div>

      {/* Botón para abrir filtros en móvil */}
      <div className="px-6 mt-4 flex justify-end md:hidden">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log("Abrir filtros en móvil")}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Tabla con datos */}
      <div className="px-6 mt-4 pb-10">
        <ReusableTable<Users>
          columns={columns}
          data={data}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          renderActions={(row) => (
            <RowActions
              onEdit={() => handleEdit(row)}
              onDelete={() => handleDelete(row)}
              onView={() => handleView(row)}
            />
          )}
        />
      </div>
    </>
  );
}
