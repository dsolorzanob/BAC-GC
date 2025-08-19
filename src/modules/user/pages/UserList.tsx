import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CustomBreadcrumb } from '@/components/ui/CustomBreadcrumb';
import { ReusableFilters } from '@/components/ui/ReusableFilters';
import { ReusableTable } from '@/components/ui/ReusableTable';
import { RowActions } from '@/components/ui/RowActions';
import DeleteUserConfirmation from '@/modules/user/components/DeleteUserConfirmación';
import EditUserConfirmation from '@/modules/user/components/EditUserConfirmation';

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

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [type, setType] = useState('');

  // State for delete confirmation dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Users | null>(null);

  // State for edit confirmation dialog
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<Users | null>(null);

  const data: Users[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juan@gmail.com',
      rol: 'Admin',
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gomez',
      email: 'maria@gmail.com',
      rol: 'Usuario',
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Gomez',
      email: 'pedro@gmail.com',
      rol: 'Usuario',
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Gomez',
      email: 'ana@gmail.com',
      rol: 'Usuario',
    },
  ];

  const handleView = (user: Users) => {
    console.log('Ver usuario:', user);
  };

  const handleEdit = (user: Users) => {
    setUserToEdit(user);
    setIsEditDialogOpen(true);
  };

  const confirmEdit = () => {
    if (userToEdit) {
      navigate(`/admin/usuarios/editar/${userToEdit.id}`);
      setUserToEdit(null);
    }
  };

  const handleDelete = (user: Users) => {
    setUserToDelete(user);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      console.log('Usuario eliminado:', userToDelete.id);
      // Here you would typically call an API to delete the user
      setUserToDelete(null);
    }
  };

  const handleFilter = () => {
    console.log('Filtrando por:', fromDate, toDate, type);
  };

  const handleDownload = () => {
    console.log('Descargando reporte...');
  };

  const handleCreateUser = () => {
    navigate('/admin/usuarios/crear');
  };

  const columns: TableColumn<Users>[] = [
    { key: 'id', label: 'ID' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellido', label: 'Apellido' },
    { key: 'email', label: 'Email' },
    { key: 'rol', label: 'Rol' },
  ];

  return (
    <div className="min-h-screen">
      <div className="mb-4">
        <CustomBreadcrumb items={[{ label: 'Inicio', href: '/' }]} />
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Usuarios</h1>
          <Button
            onClick={handleCreateUser}
            variant="filled"
            color="info"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Crear Usuario
          </Button>
        </div>
      </div>

      {/* Filtros para desktop */}
      <div className="hidden md:block">
        <ReusableFilters
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          selectedOption={type}
          onSelectChange={setType}
          selectOptions={[
            { label: 'Administrador', value: 'Admin' },
            { label: 'Usuario', value: 'Usuario' },
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
          onClick={() => console.log('Abrir filtros en móvil')}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Tabla con datos */}
      <div className=" mt-4 pb-10">
        <ReusableTable<Users>
          columns={columns}
          data={data}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          renderActions={row => (
            <RowActions
              onEdit={() => handleEdit(row)}
              onDelete={() => handleDelete(row)}
              onView={() => handleView(row)}
            />
          )}
        />
      </div>

      {/* Delete User Confirmation Dialog */}
      {userToDelete && (
        <DeleteUserConfirmation
          isOpen={isDeleteDialogOpen}
          onClose={() => {
            setIsDeleteDialogOpen(false);
            setUserToDelete(null);
          }}
          onConfirm={confirmDelete}
          userName={userToDelete.nombre}
          userLastName={userToDelete.apellido}
        />
      )}

      {/* Edit User Confirmation Dialog */}
      {userToEdit && (
        <EditUserConfirmation
          isOpen={isEditDialogOpen}
          onClose={() => {
            setIsEditDialogOpen(false);
            setUserToEdit(null);
          }}
          onConfirm={confirmEdit}
          userName={userToEdit.nombre}
          userLastName={userToEdit.apellido}
        />
      )}
    </div>
  );
}
