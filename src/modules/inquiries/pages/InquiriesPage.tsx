import { useState } from "react";
import { reportesData } from "@/modules/inquiries/utils/staticReportes";
import { InquiryList } from "@/modules/inquiries/components/InquiryList";
import type { Report } from "@/modules/inquiries/Interfaces/Inquires";
import { useNavigate } from "react-router-dom";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";

export default function InquiriesPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedBatch, setSelectedBatch] = useState<Report | null>(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const total = reportesData.length;

  const handleSelectBatch = (row: Report) => {
    const url = `/admin/consultas/${encodeURIComponent(row.batch)}/${row.id}`;
    console.log("Navegando a:", url);
    navigate(url);
  };
  const handleReturn = () => setSelectedBatch(null);

  const handleFilter = () => {
    console.log({ fromDate, toDate, type });
  };

  const handleDownload = () => {
    console.log("Descargando reporte...");
  };

  const handleView = (row: Report) => {
    navigate(`/admin/consultas/${row.batch}-${row.status}-${row.quantity}`);
  };

  const listColumns = [
    { key: "id", label: "ID" },
    {
      key: "batch",
      label: "Lote/Ciclo/Campaña",
      render: (val: string | number, row: Report) => (
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
    <div className="min-h-screen w-full">
      <div className="mb-4">
        <CustomBreadcrumb items={[{ label: "Inicio", href: "/" }]} />
        <h1 className="text-2xl font-bold text-primary">Consultas</h1>
      </div>

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
    </div>
  );
}
