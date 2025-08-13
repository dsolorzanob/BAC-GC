import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password';
import { ArrowLeft } from 'lucide-react';
import { createUserSchema } from '../constants/create-user-schema';
import type { CreateUser } from '../interfaces/create-user';
import { CustomBreadcrumb } from '@/components/ui/CustomBreadcrumb';
import type { FieldErrors } from 'react-hook-form';

export default function UserEditPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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

  useEffect(() => {
    if (!id) return;

    const fetchUserById = async () => {
      try {
        // const response = await axios.get(`/api/usuarios/${id}`);
        // const user = response.data;

        // Simulamos datos:
        const user = {
          nombre: 'Ana',
          apellido: 'Gomez',
          email: 'ana.gomez@gmail.com',
          telefono: '+50212345678',
          rol: 'Usuario',
          password: '',
          confirmPassword: '',
        };

        Object.entries(user).forEach(([key, value]) =>
          setValue(key as keyof CreateUser, value)
        );
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    };

    fetchUserById();
  }, [id, setValue]);

  const onSubmit = async (data: CreateUser) => {
    try {
      console.log('Actualizando usuario con ID:', id, data);
      navigate('/admin/usuarios');
    } catch (error) {
      console.error('Error actualizando usuario:', error);
    }
  };

  const onError = (errors: FieldErrors<CreateUser>) => {
    console.error('Errores del formulario:', errors);
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
              { label: 'Editar Usuario', isCurrentPage: true },
            ]}
          />
          <h1 className="text-2xl font-bold text-primary">Editar Usuario</h1>
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
                    type="email"
                    placeholder="email@ejemplo.com"
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
                  <Input placeholder="+50212345678" {...register('telefono')} />
                  {errors.telefono && (
                    <p className="text-sm text-red-500">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rol</label>
                  <Input placeholder="Administrador" {...register('rol')} />
                  {errors.rol && (
                    <p className="text-sm text-red-500">{errors.rol.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <PasswordInput
                    label="Nueva contraseña"
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
                    label="Confirmar nueva contraseña"
                    id="confirmPassword"
                    {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">
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
                  {isSubmitting ? 'Actualizando...' : 'Actualizar Usuario'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
