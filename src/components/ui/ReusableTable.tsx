import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface ReusableTableProps<T> {
  columns: Column<T>[];
  data: T[];
  page?: number;
  pageSize?: number;
  total?: number;
  onPageChange?: (newPage: number) => void;
   onPageSizeChange?: (newSize: number) => void;
  onRowClick?: (row: T) => void;
}

export function ReusableTable<T extends Record<string, unknown>>({
  columns,
  data,
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  onRowClick,
}: ReusableTableProps<T>) {
  const totalPages = total && pageSize ? Math.ceil(total / pageSize) : 1;

  return (
    <div className="rounded-xl border shadow-sm overflow-x-auto bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)}>{col.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow 
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={onRowClick ? "cursor-pointer hover:bg-gray-50 transition-colors" : ""}
            >
              {columns.map((col) => (
                <TableCell key={String(col.key)}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

  {page !== undefined &&
  pageSize !== undefined &&
  total !== undefined &&
  onPageChange && (
    <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted rounded-b-xl text-sm">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Filas por página:</span>
        <Select
          value={String(pageSize)}
          onValueChange={(value) => {
            onPageChange(1); // Reset to first page
            onPageSizeChange?.(parseInt(value));
          }}
        >
          <SelectTrigger className="w-[80px] h-8 px-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50, 100].map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-4 h-8"
          variant="filled"
        >
          ← Anterior
        </Button>
        <span className="text-muted-foreground">
          Página <strong>{page}</strong> de <strong>{totalPages}</strong>
        </span>
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 h-8"
          variant="filled"
        >
          Siguiente →
        </Button>
      </div>
    </div>
)}

    </div>
  );
}
