
import { Button } from "./button";
import { Pencil, Trash2, Download, RefreshCcw, Eye } from "lucide-react";

interface RowActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
  onResend?: () => void;
  onView?: () => void;
}

export const RowActions: React.FC<RowActionsProps> = ({
  onEdit,
  onDelete,
  onDownload,
  onResend,
  onView,
}) => {
  return (
    <div className="flex gap-2">
      {onView && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
          variant="ghost"
          color="success"
          size="sm"
          title="Ver"
        >
          <Eye className="w-4 h-4" />
        </Button>
      )}
      {onEdit && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          variant="ghost"
          color="secondary"
          size="icon"
          title="Editar"
        >
          <Pencil className="w-4 h-4" />
        </Button>
      )}
      {onDelete && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          variant="ghost"
          color="error"
          size="icon"
          title="Eliminar"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      )}
      {onDownload && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDownload();
          }}
          variant="ghost"
          color="success"
          size="icon"
          title="Descargar"
        >
          <Download className="w-4 h-4" />
        </Button>
      )}
      {onResend && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onResend();
          }}
          variant="filled"
          color="warning"
          size="sm"
        >
          <RefreshCcw className="w-4 h-4 mr-1" />
          Reenviar
        </Button>
      )}
    </div>
  );
};
