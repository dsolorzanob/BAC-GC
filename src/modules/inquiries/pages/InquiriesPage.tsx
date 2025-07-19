import React, { useState } from "react";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { ReusableFilters } from "@/components/ui/ReusableFilters";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";

interface Reporte {
  lote: string;
  estado: string;
  cantidad: string;
  fecha: string;
  abierto: string;
  fallido: string;
  spam: string;
  rebote: string;
  desuscrito: string;
  [key: string]: string;
}

const data: Reporte[] = [
  {
    lote: "CicloEstudiantes2023-01",
    estado: "Procesado",
    cantidad: "7,278",
    fecha: "4/23/2024 11:45",
    abierto: "2,409",
    fallido: "0",
    spam: "0",
    rebote: "208",
    desuscrito: "0",
  },
  {
    lote: "Campaña mes madres 2024",
    estado: "Procesado",
    cantidad: "100,000",
    fecha: "6/10/2024 11:29",
    abierto: "99,192",
    fallido: "50",
    spam: "2",
    rebote: "708",
    desuscrito: "50",
  },
];

const columns = [
  {
    key: "lote",
    label: "Lote/Ciclo/Campaña",
    render: (val: string) => (
      <span className="text-primary underline cursor-pointer">{val}</span>
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

export default function InquiriesPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = 20;

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tipo, setTipo] = useState("");

  const handleFilter = () => {
    console.log({ fromDate, toDate, tipo });
  };

  const handleDownload = () => {
    console.log("Descargar reporte...");
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <Header>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 bg-white border-b shadow-sm">
          <div className="flex items-center gap-4">
            <SearchSidebar onSearch={() => {}} />
            <ThemeSwitch />
          </div>
        </div>
      </Header>

      <div className="px-6 mt-6">
        <h1 className="text-2xl font-bold text-primary">Consultas</h1>
        <div className="text-sm text-muted-foreground">Home &gt; Detalle</div>
      </div>

      {/* Filtros */}
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

      {/* Tabla */}
      <div className="px-6 mt-4 pb-10">
        <ReusableTable<Reporte>
          columns={columns}
          data={data}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}
