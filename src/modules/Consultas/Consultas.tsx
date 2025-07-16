import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

const data = [
  {
    lote: 'CicloEstudiantes2023-01',
    estado: 'Procesado',
    cantidad: '7,278',
    fecha: '4/23/2024 11:45',
    abierto: '2,409',
    fallido: '0',
    spam: '0',
    rebote: '208',
    desuscrito: '0',
  },
  {
    lote: 'Campaña mes madres 2024',
    estado: 'Procesado',
    cantidad: '100,000',
    fecha: '6/10/2024 11:29',
    abierto: '99,192',
    fallido: '50',
    spam: '2',
    rebote: '708',
    desuscrito: '50',
  },
];

const columns = [
  'Lote/Ciclo/Campaña',
  'Estado',
  'Cantidad',
  'Fecha Envío',
  'Abierto',
  'Fallido',
  'Spam',
  'Rebote',
  'Desuscrito',
];

const ReportesTable = () => (
  <div className="rounded-xl border bg-white shadow-md overflow-auto">
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col} className="text-sm font-semibold text-gray-700">
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, i) => (
          <TableRow key={i} className="hover:bg-gray-50 transition">
            <TableCell className="text-primary underline cursor-pointer font-medium">
              {item.lote}
            </TableCell>
            <TableCell>{item.estado}</TableCell>
            <TableCell>{item.cantidad}</TableCell>
            <TableCell>{item.fecha}</TableCell>
            <TableCell>{item.abierto}</TableCell>
            <TableCell>{item.fallido}</TableCell>
            <TableCell>{item.spam}</TableCell>
            <TableCell>{item.rebote}</TableCell>
            <TableCell>{item.desuscrito}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default function ReportesBACPage() {
  return (
    <div className="min-h-screen bg-muted p-6">
      {/* Navbar superior */}
      <div className="flex items-center justify-between bg-white shadow-sm border rounded-xl px-6 py-4 mb-8">
        <div className="flex items-center gap-6">
          <img src="/logo-bac.png" alt="BAC Logo" className="h-8" />
            <Button variant="filled" color="error">Consultas</Button>
          <span className="text-muted-foreground font-medium cursor-pointer hover:text-foreground">Diseño</span>
          <span className="text-muted-foreground font-medium cursor-pointer hover:text-foreground">Administración</span>
        </div>
        <Input type="text" placeholder="Buscar..." className="w-60" />
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">Desde</label>
          <Input type="date" className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">Hasta</label>
          <Input type="date" className="w-40" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">Tipo</label>
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mkt">Dropdown Mkt</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 mt-1">
        <Button variant="filled" color="error">Filtrar</Button>
          <Button variant="filled" color="blue">Descargar</Button>
        </div>
      </div>

      {/* Tabla */}
      <ReportesTable />
    </div>
  );
}
