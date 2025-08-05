import { useState } from "react";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { reportesData } from "@/modules/inquiries/utils/staticReportes";
import { InquiryDetail } from "@/modules/inquiries/pages/InquiryDetail";
import { InquiryList } from "@/modules/inquiries/components/InquiryList";
import type { Report } from "@/modules/inquiries/Interfaces/Inquires";

export default function InquiriesPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedBatch, setSelectedBatch] = useState<Report | null>(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState("");

  const total = reportesData.length;

  const handleSelectBatch = (row: Report) => setSelectedBatch(row);
  const handleReturn = () => setSelectedBatch(null);

  const handleFilter = () => {
    console.log({ fromDate, toDate, type });
  };

  const handleDownload = () => {
    console.log("Descargando reporte...");
  };

  const handleView = (row: Report) => {
    console.log("Ver reporte:", row);
  };

  const listColumns = [
    {
      key: "batch",
      label: "Lote/Ciclo/Campaña",
      render: (val: string, row: Report) => (
        <span
          className="text-primary underline cursor-pointer"
          onClick={() => handleSelectBatch(row)}
        >
          {val}
        </span>
      ),
    },
    { key: "status", label: "Estado" },
    { key: "quantity", label: "Cantidad" },
    { key: "date", label: "Fecha de envío" },
    { key: "opened", label: "Abiertos" },
    { key: "failed", label: "Fallidos" },
    { key: "spam", label: "Spam" },
    { key: "bounced", label: "Rebotados" },
    { key: "unsubscribed", label: "Darse de baja" },
  ];

  return (
    <div className="min-h-screen">
      <Header>
        <div className="ml-auto flex items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => console.log("Abrir búsqueda móvil")}
          >
            <Search className="h-4 w-4" />
          </Button>
          <div className="hidden md:block">
            <SearchSidebar onSearch={() => {}} />
          </div>
          <ThemeSwitch />
        </div>
      </Header>

      {selectedBatch ? (
        <InquiryDetail selectedBatch={selectedBatch} onReturn={handleReturn} />
      ) : (
        <InquiryList
          reportes={reportesData}
          page={page}
          pageSize={pageSize}
          total={total}
          setPage={setPage}
          setPageSize={setPageSize}
          onSelectBatch={handleSelectBatch}
          fromDate={fromDate}
          toDate={toDate}
          type={type}
          setFromDate={setFromDate}
          setToDate={setToDate}
          setType={setType}
          onFilter={handleFilter}
          onDownload={handleDownload}
          listColumns={listColumns}
          handleView={handleView}
        />
      )}
    </div>
  );
}
