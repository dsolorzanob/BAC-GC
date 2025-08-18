import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResetPasswordLayout } from '../layouts/ResetPasswordLayout';

const PasswordChangeSuccess = () => {
  const navigate = useNavigate();

  const handleReturnToLogin = () => {
    navigate('/login');
  };

  return (
    <ResetPasswordLayout>
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Icono de éxito */}
        <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Título y mensaje */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">
            ¡Contraseña Cambiada Exitosamente!
          </h1>
          <p className="text-gray-600">
            Tu contraseña ha sido actualizada correctamente. Ahora puedes
            iniciar sesión con tu nueva contraseña.
          </p>
        </div>

        {/* Botón para regresar al login */}
        <Button
          onClick={handleReturnToLogin}
          variant="filled"
          color="info"
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Regresar al Login
        </Button>

        {/* Información adicional */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>Nota:</strong> Por seguridad, tu sesión anterior ha sido
            cerrada. Inicia sesión nuevamente con tu nueva contraseña.
          </p>
        </div>
      </div>
    </ResetPasswordLayout>
  );
};

export default PasswordChangeSuccess;
