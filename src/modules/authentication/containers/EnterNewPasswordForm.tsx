import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { newPasswordSchema } from "../constants/new-password-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import type { NewPassword } from "../interfaces/new-password";
import { PasswordInput } from "@/components/ui/password";

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
      console.log("Form data:", data);
      navigate("/reset-password/new-password");
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
          <h1 className="text-2xl font-bold text-gray-900">
            Crear nueva contraseña
          </h1>
          <p className="text-gray-600 mt-2">
            Ingresa tu nueva contraseña y confírmala para restablecer tu contraseña.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
         <div className="space-y-2">
          <PasswordInput label="Nueva contraseña" id="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
         </div>
         <div className="space-y-2">
          <PasswordInput label="Confirmar contraseña" id="confirmPassword" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
         </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Cambiar contraseña"}
          </Button>
        </form>

        
      </div>
    </Card>
  );
};

export default EnterNewPasswordForm;
