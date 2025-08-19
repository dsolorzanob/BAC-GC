import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { AlertTriangle } from 'lucide-react';

interface DeleteUserConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
  userLastName: string;
}

const DeleteUserConfirmation: React.FC<DeleteUserConfirmationProps> = ({
  isOpen,
  onClose,
  onConfirm,
  userName,
  userLastName,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[500px] max-w-[500px] min-w-[500px]">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-error/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-error" />
          </div>
          <DialogTitle className="text-xl font-semibold text-error text-center">
            Confirmar Eliminación
          </DialogTitle>
          <DialogDescription className="text-base">
            ¿Está seguro de que desea eliminar el registro de usuario?
          </DialogDescription>
        </DialogHeader>

        <div className="text-center space-y-4 py-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-lg font-semibold text-foreground">
              {userName} {userLastName}
            </p>
          </div>
          <p className="text-sm text-muted-foreground px-4">
            Esta acción no se puede deshacer. El usuario será eliminado
            permanentemente del sistema.
          </p>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-3 sm:gap-2 justify-center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            className="w-full sm:w-auto min-w-[120px]"
          >
            Cancelar
          </Button>
          <Button
            variant="filled"
            color="error"
            onClick={handleConfirm}
            className="w-full sm:w-auto min-w-[120px]"
          >
            Eliminar Usuario
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserConfirmation;
