import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";
import { ReusableFilters } from "@/components/ui/ReusableFilters";
import { ReusableTable } from "@/components/ui/ReusableTable";
import { RowActions } from "@/components/ui/RowActions";
import type { Report } from "@/modules/inquiries/Interfaces/Inquires";

type TableColumn<T> = {
  key: keyof T | string;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

interface InquiryListProps {
  reportes: Report[];
  page: number;
  pageSize: number;
  total: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  onSelectBatch: (row: Report) => void;
  fromDate: string;
  toDate: string;
  type: string;
  setFromDate: (val: string) => void;
  setToDate: (val: string) => void;
  setType: (val: string) => void;
  onFilter: () => void;
  onDownload: () => void;
  listColumns: TableColumn<Report>[];
  handleView: (row: Report) => void;
}

export function InquiryList({
  reportes,
  page,
  pageSize,
  total,
  setPage,
  setPageSize,
  fromDate,
  toDate,
  type,
  setFromDate,
  setToDate,
  setType,
  onFilter,
  onDownload,
  listColumns,
  handleView,
}: InquiryListProps) {
  return (
    <>
      <div className="mt-6">
        <CustomBreadcrumb items={[{ label: "Inicio", href: "/" }]} />
        <h1 className="text-2xl font-bold text-primary">Consultas</h1>
      </div>

      <div className="mt-6 hidden md:block">
        <ReusableFilters
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          selectedOption={type}
          onSelectChange={setType}
          selectOptions={[
            { label: "Dropdown Mkt", value: "mkt" },
            { label: "Otro", value: "other" },
          ]}
          onFilter={onFilter}
          onDownload={onDownload}
        />
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
        <ReusableTable<Report>
          columns={listColumns}
          data={reportes}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          renderActions={(row) => (
            <RowActions onView={() => handleView(row)} />
          )}
        />
      </div>
    </>
  );
}
