import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password";
import { ArrowLeft } from "lucide-react";
import { createUserSchema } from "../constants/create-user-schema";
import type { CreateUser } from "../interfaces/create-user";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";

export default function UserCreatePage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  const handleBack = () => {
    navigate("/admin/usuarios");
  };

  const onSubmit = async (data: CreateUser) => {
    try {
      console.log("Form data:", data);
      // Aquí iría la lógica para crear el usuario
      navigate("/admin/usuarios");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const onError = (errors: any) => {
    console.error("Form errors:", errors);
  };

      return (
      <div className="min-h-screen">
        <Header>
          <div className="ml-auto flex items-center justify-end space-x-4">
            <SearchSidebar onSearch={() => {}} />
            <ThemeSwitch />
          </div>
        </Header>
        <div className="container mx-auto px-4">
        <div className="mb-1 mt-4">
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
              { label: "Home", href: "/admin/usuarios" },
              { label: "Crear Usuario", isCurrentPage: true },
            ]}
          />
          <h1 className="text-2xl font-bold text-primary">Crear Usuario</h1>
        </div>
        <Card>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre</label>
                  <Input
                    placeholder="Nombre del usuario"
                    {...register("nombre")}
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
                    {...register("apellido")}
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
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono</label>
                  <Input placeholder="+1234567890" {...register("telefono")} />
                  {errors.telefono && (
                    <p className="text-sm text-red-500">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rol</label>
                  <Input placeholder="Usuario" {...register("rol")} />
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
                    {...register("password")}
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
                    {...register("confirmPassword")}
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
                  {isSubmitting ? "Creando..." : "Crear Usuario"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
