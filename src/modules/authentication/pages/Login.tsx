import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginLayout } from "../layouts/LoginLayout";
import { showToast } from "@/components/ui/toast";
import { PasswordInput } from "@/components/ui/password";
import { loginSchema } from "../constants/login-schema";
import type { LoginFormData } from "../constants/login-schema";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import reference from "@/assets/reference-login.jpg";
export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Formulario válido:", data);

    // Simulamos login guardando un token
    localStorage.setItem("token", "fake-jwt-token");

    showToast("success", "Inicio de sesión exitoso", {
      description: "Has iniciado sesión correctamente.",
    });

    // Redireccionar al dashboard
    navigate("/admin", { replace: true });
  };

  const onError = (errors: FieldErrors<LoginFormData>) => {
    const firstError = Object.values(errors)[0];
    const message =
      typeof firstError?.message === "string"
        ? firstError.message
        : "Revisa los campos del formulario";

    showToast("error", "Error en el formulario", {
      description: message,
    });
  };

  return (
    <LoginLayout>
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center bg-white gap-2 mr-4">
      
        <div className="hidden lg:block w-full lg:w-[65%] h-[calc(100vh-73px)] overflow-hidden">
          <img
            src={reference}
            alt="Ilustración"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-[35%] bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Gestión de comunicaciones
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-5"
          >
            {/* Usuario */}
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium block mb-1"
              >
                Usuario
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Ingrese su usuario"
                {...register("username")}
                className={errors.username ? "border-red-500" : ""}
              />
              {errors.username && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Contraseña */}
            <div>
              <PasswordInput
                id="password"
                label="Contraseña"
                placeholder="Ingrese su contraseña"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Recordarme */}
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Recordarme
              </label>
            </div>

            {/* Botón */}
            <Button
              variant="filled"
              type="submit"
              className="w-full"
              color="info"
            >
              <Lock className="h-4 w-4 mr-2" />
              Iniciar sesión
            </Button>
            {/* Enlaces */}
            <div className="flex justify-between text-sm mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Crear cuenta
              </a>
              <a
                href="/reset-password/send-email"
                className="text-blue-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
