import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, Download } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface ReusableFiltersProps {
  fromDate?: string;
  toDate?: string;
  onFromDateChange?: (value: string) => void;
  onToDateChange?: (value: string) => void;

  selectLabel?: string;
  selectOptions?: FilterOption[];
  selectedOption?: string;
  onSelectChange?: (value: string) => void;

  onFilter?: () => void;
  onDownload?: () => void;
}

export const ReusableFilters: React.FC<ReusableFiltersProps> = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  selectLabel = "Tipo",
  selectOptions = [],
  selectedOption,
  onSelectChange,
  onFilter,
  onDownload,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8 flex flex-wrap gap-4 items-end">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-muted-foreground">Desde</label>
        <Input
          type="date"
          className="w-40"
          value={fromDate}
          onChange={(e) => onFromDateChange?.(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-muted-foreground">Hasta</label>
        <Input
          type="date"
          className="w-40"
          value={toDate}
          onChange={(e) => onToDateChange?.(e.target.value)}
        />
      </div>

      {selectOptions.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-muted-foreground">{selectLabel}</label>
          <Select value={selectedOption} onValueChange={(value) => onSelectChange?.(value)}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder={`Seleccionar ${selectLabel.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex gap-2 mt-1">
        <Button variant="filled" onClick={onFilter}>
          <Filter className="h-4 w-4 mr-1" />
          Filtrar
        </Button>
        <Button variant="outlined" color="success" onClick={onDownload}>
          <Download className="h-4 w-4 mr-1" />
          Descargar
        </Button>
      </div>
    </div>
  );
};
