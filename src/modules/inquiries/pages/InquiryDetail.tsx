import { Button } from "@/components/ui/button";
import { MoveLeft, Search, Download, Filter, RefreshCw } from "lucide-react";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ReusableTable } from "@/components/ui/ReusableTable";
import type { BatchDetail } from "@/modules/inquiries/Interfaces/Inquires";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";

export function InquiryDetail() {
  const { titleConsulta, id } = useParams();
  const navigate = useNavigate();

  console.log("Parámetros recibidos:", { titleConsulta, id });

  const detailData: BatchDetail[] = [
    {
      email: "philippe.reyes@pbs.group",
      status: "Opened",
      count: "2",
      os: "IOS",
      browser: "Safari",
      options: "",
    },
  ];

  const detailColumns = [
    { key: "email", label: "Correo electrónico" },
    { key: "status", label: "Estado" },
    { key: "count", label: "Cantidad de aperturas" },
    { key: "os", label: "Sistema operativo" },
    { key: "browser", label: "Navegador" },
    {
      key: "options",
      label: "Opciones",
      render: () => (
        <div className="flex gap-2">
          <Button color="warning" variant="filled" size="sm">
            <RefreshCw className="h-3 w-3 mr-1" />
            Reenviar
          </Button>
          <Button color="success" variant="outlined" size="sm">
            <Download className="h-3 w-3 mr-1" />
            Descargar
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <Button
        onClick={() => navigate("/admin/consultas")}
        variant="ghost"
        color="secondary"
        size="sm"
        className="mb-4"
      >
        <MoveLeft className="h-4 w-4 mr-1" />
        Regresar
      </Button>

      <CustomBreadcrumb
        items={[
          { label: "Inicio", href: "/admin" },
          { label: "Consultas", href: "/admin/consultas" },
          { label: titleConsulta || "Detalle", isCurrentPage: true },
        ]}
      />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-primary">
          {titleConsulta || "Detalle de Consulta"}
        </h1>
        <div className="text-sm text-muted-foreground">ID: {id || "N/A"}</div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8 hidden md:flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">
            Parámetros
          </label>
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="informative">Informativo</SelectItem>
              <SelectItem value="promotional">Promocional</SelectItem>
              <SelectItem value="urgent">Urgente</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-52">
          <Input placeholder="Ingresa un valor" />
        </div>
        <div className="flex gap-2 mt-1">
          <Button variant="filled" color="primary">
            <Search className="h-4 w-4 mr-1" />
            Buscar
          </Button>
          <Button variant="outlined" color="success">
            <Download className="h-4 w-4 mr-1" />
            Descargar
          </Button>
        </div>
      </div>

      <div className="mt-4 flex justify-end md:hidden">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log("Abrir modal de filtros")}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 pb-10">
        <ReusableTable
          columns={detailColumns}
          data={detailData}
          page={1}
          pageSize={10}
          total={1}
          onPageChange={() => {}}
          onPageSizeChange={() => {}}
        />
      </div>
    </div>
  );
}
