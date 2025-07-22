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
} from "@/modules/inquiries/Interfaces/Inquires";
import { reportesData } from "@/modules/inquiries/utils/staticReportes";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            Reenviar
          </Button>
          <Button color="success" variant="outlined" size="sm">
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Detalle del lote: {selectedLote.lote}
            </h2>
            <Button onClick={handleBack} variant="ghost" color="primary">
              ← Regresar
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4 items-end">
            <div>
              <label className="block text-sm">Parámetros de búsqueda</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="estado">Estado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="w-52">
                <Input placeholder="Ingrese valor" />
              </div>
            </div>
            <Button color="primary" variant="filled" size="default">
              Buscar
            </Button>
            <Button color="success" variant="outlined" size="default">
              Descargar
            </Button>
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
            <h1 className="text-2xl font-bold text-primary">Consultas</h1>
            <div className="text-sm text-muted-foreground">
              Home &gt; Detalle
            </div>
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
