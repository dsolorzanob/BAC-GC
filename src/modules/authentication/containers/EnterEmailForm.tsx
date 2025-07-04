import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { recoveryEmailSchema } from "../constants/recovery-email-schema";
import type { EnterRecoveryEmail } from "../interfaces/recovery-email";

const EnterEmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnterRecoveryEmail>({
    resolver: zodResolver(recoveryEmailSchema),
  });

  const onSubmit = async (data: EnterRecoveryEmail) => {
    try {
      console.log("Form data:", data);
      // Aquí iría la lógica para enviar el email de recuperación
      // await sendRecoveryEmail(data.email);
    } catch (error) {
      console.error("Error sending recovery email:", error);
    }
  };

  const onError = (errors: any) => {
    console.error("Form errors:", errors);
  };

  return (
    <Card className="w-full  mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Recuperar contraseña</h1>
          <p className="text-gray-600 mt-2">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              label="Correo electrónico"
              placeholder="ejemplo@correo.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar enlace de recuperación"}
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

export default EnterEmailForm;
