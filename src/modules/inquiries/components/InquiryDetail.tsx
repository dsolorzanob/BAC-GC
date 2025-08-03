import { Button } from "@/components/ui/button";
import { MoveLeft, Search, Download, Filter, RefreshCw } from "lucide-react";
import { CustomBreadcrumb } from "@/components/ui/CustomBreadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ReusableTable } from "@/components/ui/ReusableTable";
import type { Report, BatchDetail } from "@/modules/inquiries/Interfaces/Inquires";

interface InquiryDetailProps {
  selectedBatch: Report;
  onReturn: () => void;
}

export function InquiryDetail({ selectedBatch, onReturn }: InquiryDetailProps) {
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
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "count", label: "Open Count" },
    { key: "os", label: "OS" },
    { key: "browser", label: "Browser" },
    {
      key: "options",
      label: "Options",
      render: () => (
        <div className="flex gap-2">
          <Button color="warning" variant="filled" size="sm">
            <RefreshCw className="h-3 w-3 mr-1" />
            Resend
          </Button>
          <Button color="success" variant="outlined" size="sm">
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Button
        onClick={onReturn}
        variant="ghost"
        color="secondary"
        size="sm"
        className="mb-4"
      >
        <MoveLeft className="h-4 w-4 mr-1" />
        Back
      </Button>

      <CustomBreadcrumb
        items={[
          { label: "Home", href: "/admin/inquiries" },
          { label: "Detail", isCurrentPage: true },
        ]}
      />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-primary">
          {selectedBatch.batch}
        </h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8 hidden md:flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">
            Parameters
          </label>
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="informative">Informative</SelectItem>
              <SelectItem value="promotional">Promotional</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-52">
          <Input placeholder="Enter value" />
        </div>
        <div className="flex gap-2 mt-1">
          <Button variant="filled" color="primary">
            <Search className="h-4 w-4 mr-1" />
            Search
          </Button>
          <Button variant="outlined" color="success">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>

      <div className="mt-4 flex justify-end md:hidden">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log("Open filter modal")}
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
