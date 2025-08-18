import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { newPasswordSchema } from '../constants/new-password-schema';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import type { NewPassword } from '../interfaces/new-password';
import { PasswordInput } from '@/components/ui/password';

const EnterNewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPassword>({
    resolver: zodResolver(newPasswordSchema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data: NewPassword) => {
    try {
      console.log('Form data:', data);
      // Simular cambio de contraseña exitoso
      // Aquí iría la lógica real de cambio de contraseña
      navigate('/reset-password/success');
    } catch (error) {
      console.error('Error sending recovery email:', error);
    }
  };

  const onError = (errors: FieldErrors<NewPassword>) => {
    console.error('Form errors:', errors);
  };
  return (
    <Card className="w-full  mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Crear nueva contraseña
          </h1>
          <p className="text-gray-600 mt-2">
            Ingresa tu nueva contraseña y confírmala para restablecer tu
            contraseña.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div className="space-y-2">
            <PasswordInput
              label="Nueva contraseña"
              id="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <PasswordInput
              label="Confirmar contraseña"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            variant="filled"
            color="info"
          >
            {isSubmitting ? 'Enviando...' : 'Cambiar contraseña'}
          </Button>
        </form>
        <div className="text-center">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EnterNewPasswordForm;
