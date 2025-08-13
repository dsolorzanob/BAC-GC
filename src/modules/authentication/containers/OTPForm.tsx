import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { otpSchema } from '../constants/otp-schema';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import type { OTP } from '../interfaces/otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const OTPForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<OTP>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const navigate = useNavigate();
  const otpValue = watch('otp');

  const onSubmit = async (data: OTP) => {
    try {
      console.log('OTP data:', data);
      // Aquí iría la validación del OTP
      navigate('/reset-password/new-password');
    } catch (error) {
      console.error('Error validating OTP:', error);
    }
  };

  const onError = (errors: FieldErrors<OTP>) => {
    console.error('Form errors:', errors);
  };
  return (
    <Card className="w-full  mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Verificación de código
          </h1>
          <p className="text-gray-600 mt-2">
            Ingresa el código de verificación que te hemos enviado a tu correo
            electrónico.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div className="space-y-2 flex justify-center">
            <InputOTP
              maxLength={6}
              className="w-full"
              value={otpValue}
              onChange={value => setValue('otp', value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {errors.otp && (
              <p className="text-sm text-red-500">{errors.otp.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="filled"
            color="info"
            className="w-full"
            disabled={isSubmitting || otpValue.length !== 6}
          >
            {isSubmitting ? 'Verificando...' : 'Verificar código'}
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

export default OTPForm;
