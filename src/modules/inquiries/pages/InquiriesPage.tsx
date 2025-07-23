import React, { useState } from "react";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { ReusableFilters } from "@/components/ui/ReusableFilters";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Button } from "@/components/ui/button";
import type {
  DetalleLote,
  Reporte,
} from "@/modules/inquiries/interfaces/Inquires";
import { reportesData } from "@/modules/inquiries/utils/staticReportes";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, RefreshCw, MoveLeft, Search } from "lucide-react";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";

export default function InquiriesPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = reportesData.length;

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tipo, setTipo] = useState("");
  const [selectedLote, setSelectedLote] = useState<Reporte | null>(null);

  const handleFilter = () => {
    console.log({ fromDate, toDate, tipo });
  };

  const handleDownload = () => {
    console.log("Descargar reporte...");
  };

  const handleSelectLote = (row: Reporte) => {
    setSelectedLote(row);
  };

  const handleBack = () => {
    setSelectedLote(null);
  };

  const handleView = (row: Reporte) => {
    console.log("Ver reporte:", row);
    // Aquí puedes agregar la lógica para ver el detalle
    // Por ejemplo, navegar a una página de detalle o abrir un modal
  };

  const columnsGeneral = [
    {
      key: "lote",
      label: "Lote/Ciclo/Campaña",
      render: (val: string, row: Reporte) => (
        <span
          className="text-primary underline cursor-pointer"
          onClick={() => handleSelectLote(row)}
        >
          {val}
        </span>
      ),
    },
    { key: "estado", label: "Estado" },
    { key: "cantidad", label: "Cantidad" },
    { key: "fecha", label: "Fecha Envío" },
    { key: "abierto", label: "Abierto" },
    { key: "fallido", label: "Fallido" },
    { key: "spam", label: "Spam" },
    { key: "rebote", label: "Rebote" },
    { key: "desuscrito", label: "Desuscrito" },
    {
      key: "acciones",
      label: "Acciones",
      render: (val: any, row: Reporte) => (
        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleView(row);
            }}
            variant="ghost"
            color="secondary"
            className="bg-gray-100"
            size="sm"
            title="Ver"
          >
            Ver
          </Button>
        </div>
      ),
    },
  ];

  const detalleData: DetalleLote[] = [
    {
      email: "philippe.reyes@pbs.group",
      estado: "Abierto",
      cantidad: "2",
      sistema: "IOS",
      navegador: "Safari",
      opciones: "",
    },
  ];

  const columnsDetalle = [
    { key: "email", label: "Email" },
    { key: "estado", label: "Estado" },
    { key: "cantidad", label: "Cantidad Abierto" },
    { key: "sistema", label: "Sistema Operativo" },
    { key: "navegador", label: "Navegador" },
    {
      key: "opciones",
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
    <div className="min-h-screen bg-gray-50">
      <Header>
        <div className="ml-auto flex items-center justify-end space-x-4">
          <SearchSidebar onSearch={() => {}} />
          <ThemeSwitch />
        </div>
      </Header>

      {selectedLote ? (
        <div className="p-6">
          <Button
            onClick={handleBack}
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
              { label: "Home", href: "/admin/consultas" },
              { label: "Detalle", isCurrentPage: true },
            ]}
          />
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-primary">
              {selectedLote.lote}
            </h1>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                Parametros
              </label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="informativo">Informativo</SelectItem>
                  <SelectItem value="promocional">Promocional</SelectItem>
                  <SelectItem value="urgente">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="w-52">
                <Input placeholder="Ingrese valor" />
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <Button variant="filled" color="primary" onClick={handleFilter}>
                <Search className="h-4 w-4 mr-1" />
                Buscar
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-1" />
                Descargar
              </Button>
            </div>
          </div>

          <ReusableTable
            columns={columnsDetalle}
            data={detalleData}
            page={1}
            pageSize={10}
            total={1}
            onPageChange={() => {}}
            onPageSizeChange={() => {}}
          />
        </div>
      ) : (
        <>
          <div className="px-6 mt-6">
            <CustomBreadcrumb items={[{ label: "Home", href: "/" }]} />
            <h1 className="text-2xl font-bold text-primary">Consultas</h1>
          </div>

          <div className="px-6 mt-6">
            <ReusableFilters
              fromDate={fromDate}
              toDate={toDate}
              onFromDateChange={setFromDate}
              onToDateChange={setToDate}
              selectedOption={tipo}
              onSelectChange={setTipo}
              selectOptions={[
                { label: "Dropdown Mkt", value: "mkt" },
                { label: "Otro", value: "otro" },
              ]}
              onFilter={handleFilter}
              onDownload={handleDownload}
            />
          </div>

          <div className="px-6 mt-4 pb-10">
            <ReusableTable<Reporte>
              columns={columnsGeneral}
              data={reportesData}
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          </div>
        </>
      )}
    </div>
  );
}
