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
import { Edit } from 'lucide-react';

interface EditUserConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
  userLastName: string;
}

const EditUserConfirmation: React.FC<EditUserConfirmationProps> = ({
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
          <div className="mx-auto w-16 h-16 bg-info/10 rounded-full flex items-center justify-center">
            <Edit className="h-8 w-8 text-info" />
          </div>
          <DialogTitle className="text-xl font-semibold text-info text-center">
            Confirmar Edición
          </DialogTitle>
          <DialogDescription className="text-base">
            ¿Está seguro de que desea editar el registro de usuario?
          </DialogDescription>
        </DialogHeader>

        <div className="text-center space-y-4 py-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-lg font-semibold text-foreground">
              {userName} {userLastName}
            </p>
          </div>
          <p className="text-sm text-muted-foreground px-4">
            Será redirigido a la página de edición donde podrá modificar la
            información del usuario.
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
            color="info"
            onClick={handleConfirm}
            className="w-full sm:w-auto min-w-[120px]"
          >
            Editar Usuario
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserConfirmation;
