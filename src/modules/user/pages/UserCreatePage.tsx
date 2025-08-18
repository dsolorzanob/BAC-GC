import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { createUserSchema } from '../constants/create-user-schema';
import type { CreateUser } from '../interfaces/create-user';
import { CustomBreadcrumb } from '@/components/ui/CustomBreadcrumb';
import { useState } from 'react';

export default function UserCreatePage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  const handleBack = () => {
    navigate('/admin/usuarios');
  };

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    setValue('rol', value);
  };

  const onSubmit = async (data: CreateUser) => {
    try {
      console.log('Form data:', data);
      // Aquí iría la lógica para crear el usuario
      navigate('/admin/usuarios');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const onError = (errors: FieldErrors<CreateUser>) => {
    console.error('Form errors:', errors);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="mb-1">
          <Button
            variant="ghost"
            size="sm"
            color="secondary"
            onClick={handleBack}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Regresar
          </Button>
        </div>
        <div className="mb-4">
          <CustomBreadcrumb
            items={[
              { label: 'Home', href: '/admin/usuarios' },
              { label: 'Crear Usuario', isCurrentPage: true },
            ]}
          />
          <h1 className="text-2xl font-bold text-primary">Crear Usuario</h1>
        </div>
        <Card>
          <CardContent className="px-2">
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre</label>
                  <Input
                    placeholder="Nombre del usuario"
                    {...register('nombre')}
                  />
                  {errors.nombre && (
                    <p className="text-sm text-red-500">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Apellido</label>
                  <Input
                    placeholder="Apellido del usuario"
                    {...register('apellido')}
                  />
                  {errors.apellido && (
                    <p className="text-sm text-red-500">
                      {errors.apellido.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    placeholder="email@ejemplo.com"
                    type="email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono</label>
                  <Input placeholder="+1234567890" {...register('telefono')} />
                  {errors.telefono && (
                    <p className="text-sm text-red-500">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rol</label>
                  <Select onValueChange={handleRoleChange} value={selectedRole}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccionar rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Usuario">Usuario</SelectItem>
                      <SelectItem value="Administrador">
                        Administrador
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.rol && (
                    <p className="text-sm text-red-500">{errors.rol.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <PasswordInput
                    label="Contraseña"
                    id="password"
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <PasswordInput
                    label="Confirmar contraseña"
                    id="confirmPassword"
                    {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-error">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="filled"
                  color="info"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creando...' : 'Crear Usuario'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
