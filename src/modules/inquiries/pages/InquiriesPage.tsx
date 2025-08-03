import { useState } from "react";
import { Header } from "@/components/layouts/Header";
import { SearchSidebar } from "@/components/layouts/SearchSidebar";
import { ThemeSwitch } from "@/components/layouts/SwitchTheme";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { reportesData } from "@/modules/inquiries/utils/staticReportes";
import { InquiryDetail } from "@/modules/inquiries/components/InquiryDetail";
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
    console.log("Download report...");
  };

  const handleView = (row: Report) => {
    console.log("View report:", row);
  };

  const listColumns = [
    {
      key: "batch",
      label: "Batch/Cycle/Campaign",
      render: (val: string, row: Report) => (
        <span
          className="text-primary underline cursor-pointer"
          onClick={() => handleSelectBatch(row)}
        >
          {val}
        </span>
      ),
    },
    { key: "status", label: "Status" },
    { key: "quantity", label: "Amount" },
    { key: "date", label: "Send Date" },
    { key: "opened", label: "Opened" },
    { key: "failed", label: "Failed" },
    { key: "spam", label: "Spam" },
    { key: "bounced", label: "Bounce" },
    { key: "unsubscribed", label: "Unsubscribed" },
  ];

  return (
    <div className="min-h-screen">
      <Header>
        <div className="ml-auto flex items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => console.log("Open mobile search")}
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
