import { Button } from "./Button";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface IConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  title,
  description,
}: IConfirmDeleteModalProps) {
  return (
    <Modal open={isOpen} title="Excluir" onClose={onClose}>
      <div className="flex flex-col items-center gap-6">
        <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-red-100">
          <TrashIcon className="h-6 w-6 text-red-900" />
        </div>

        <p className="w-[180px] text-center font-bold tracking-[-0.5px] text-gray-800">{title}</p>
        <p className="text-center tracking-[-0.5px] text-gray-800">{description}</p>
      </div>

      <div className="mt-10 space-y-4">
        <Button className="bg-red-900 hover:bg-red-800">Sim, desejo excluir</Button>
        <Button
          onClick={onClose}
          className="border border-gray-800 bg-transparent text-gray-800 hover:bg-transparent"
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
