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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface ReusableTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  page?: number;
  pageSize?: number;
  total?: number;
  onPageChange?: (newPage: number) => void;
  onPageSizeChange?: (newSize: number) => void;
  onRowClick?: (row: T) => void;
  renderActions?: (row: T) => React.ReactNode;
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
  renderActions,
}: ReusableTableProps<T>) {
  const totalPages = total && pageSize ? Math.ceil(total / pageSize) : 1;

  return (
    <div className="rounded-xl overflow-x-auto sm:border sm:shadow-sm sm:bg-white bg-transparent">
      {/* Tabla para pantallas grandes */}
      <div className="hidden sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={String(col.key)}>{col.label}</TableHead>
              ))}
              {renderActions && <TableHead>Acciones</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={
                  onRowClick
                    ? "cursor-pointer hover:bg-gray-50 transition-colors"
                    : ""
                }
              >
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                  </TableCell>
                ))}
                {renderActions && <TableCell>{renderActions(row)}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Tarjetas para móviles */}
   <div className="sm:hidden space-y-4">
  {data.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="relative rounded-xl p-4 ring-1 ring-gray-500 bg-white"
    >
      {/* Acciones superiores */}
      {renderActions && (
        <div className="absolute top-2 right-2 flex gap-2">
          {renderActions(row)}
        </div>
      )}

      {/* Contenido */}
      {columns.map((col, colIndex) => (
        <div key={String(col.key)} className="mb-2">
          {colIndex === 0 ? (
            <div className="text-sm font-bold text-gray-800">
              {col.render
                ? col.render(row[col.key], row)
                : String(row[col.key])}
            </div>
          ) : (
            <div className="text-xs text-gray-600">
              {col.label}:{" "}
              <span className="font-medium text-gray-700">
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Acción inferior */}
      {!renderActions && (
        <div className="mt-4">
          <Button
            variant="filled"
            color="primary"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Ver", row);
            }}
          >
            Ver
          </Button>
        </div>
      )}
    </div>
  ))}
</div>


      {/* Paginación */}
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
                  onPageChange(1);
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
                variant="outlined"
                color="primary"
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
                variant="outlined"
                color="primary"
              >
                Siguiente →
              </Button>
            </div>
          </div>
        )}
    </div>
  );
}
