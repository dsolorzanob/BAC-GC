import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/admin/usuarios");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Button variant="outlined" color="secondary" onClick={handleBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
         Regresar
        </Button>
      </div>
    Formulario de edición de usuario
    </div>
  );
}
