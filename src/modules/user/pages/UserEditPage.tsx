import { useNavigate, useParams } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
import { isNotNumber } from '@/utils/number-type';

export default function UserEditPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedRole, setSelectedRole] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  // Usuario de ejemplo para edición
  const user = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@ejemplo.com',
    telefono: '+50212345678',
    rol: 'Administrador',
    password: '',
    confirmPassword: '',
  };

  const handleBack = () => {
    navigate('/admin/usuarios');
  };

  useEffect(() => {
    if (!id) return;

    try {
      // Simular carga de datos del usuario
      Object.entries(user).forEach(([key, value]) =>
        setValue(key as keyof CreateUser, value)
      );
      setSelectedRole(user.rol);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }, [id, setValue]);

  const onSubmit = async (data: CreateUser) => {
    try {
      console.log('Actualizando usuario con ID:', id, data);
      // Aquí iría la lógica para actualizar el usuario
      navigate('/admin/usuarios');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const onError = (errors: FieldErrors<CreateUser>) => {
    console.error('Errores del formulario:', errors);
  };

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    setValue('rol', value);
  };

  // Función para validar input de teléfono
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permitir teclas de navegación y control
    if (
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||
      e.key === 'Escape' ||
      e.key === 'Enter' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    // Permitir algunos caracteres especiales para teléfono
    if (
      e.key === '+' ||
      e.key === '-' ||
      e.key === '(' ||
      e.key === ')' ||
      e.key === ' '
    ) {
      return;
    }

    // Bloquear cualquier tecla que no sea número
    if (isNotNumber(e.key)) {
      e.preventDefault();
    }
  };

  // Función para validar pegado de texto
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');

    // Solo permitir pegar si el texto contiene solo caracteres válidos para teléfono
    const validPhoneRegex = /^[0-9+\-\s()]+$/;
    if (validPhoneRegex.test(pastedText)) {
      const input = e.currentTarget;
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;
      const currentValue = input.value;

      const newValue =
        currentValue.substring(0, start) +
        pastedText +
        currentValue.substring(end);
      setValue('telefono', newValue);

      // Restaurar el cursor después del pegado
      setTimeout(() => {
        input.setSelectionRange(
          start + pastedText.length,
          start + pastedText.length
        );
      }, 0);
    }
  };

  // Función para validar cambio de input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Solo permitir caracteres válidos para teléfono
    const validPhoneRegex = /^[0-9+\-\s()]*$/;
    if (value === '' || validPhoneRegex.test(value)) {
      setValue('telefono', value);
    }
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
                  <Input
                    placeholder="+50212345678"
                    {...register('telefono')}
                    onKeyDown={handlePhoneKeyDown}
                    onPaste={handlePhonePaste}
                    onChange={handlePhoneChange}
                  />
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
