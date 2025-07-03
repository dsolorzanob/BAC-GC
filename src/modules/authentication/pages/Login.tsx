import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginLayout } from "../layouts/LoginLayout";

const LoginSchema = z.object({
  username: z.string().min(1, "El usuario es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
  remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <LoginLayout>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 py-10 bg-white gap-12 max-w-6xl mx-auto">
        {/* Ilustración izquierda */}
        <div className="w-full max-w-md">
          <img
            src="/illustration-login.png" 
            alt="Ilustración"
            className="w-full h-auto"
          />
        </div>

        {/* Formulario */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Gestión de comunicaciones</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Usuario */}
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1">
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
                <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
              )}
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Recordarme */}
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" {...register("remember")} />
              <label htmlFor="remember" className="text-sm text-gray-700">Recordarme</label>
            </div>

            {/* Botón */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Iniciar sesión
            </Button>

            {/* Enlaces */}
            <div className="flex justify-between text-sm mt-2">
              <a href="#" className="text-blue-600 hover:underline">Crear cuenta</a>
              <a href="#" className="text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
