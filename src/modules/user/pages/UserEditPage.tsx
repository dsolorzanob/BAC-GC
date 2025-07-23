import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

export default function UserEditPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/admin/usuarios");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Button
          variant="ghost"
          color="secondary"
          onClick={handleBack}
          className="mb-4"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Regresar
        </Button>
      </div>
      Formulario de edición de usuario
    </div>
  );
}
