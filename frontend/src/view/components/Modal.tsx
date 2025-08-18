import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../app/lib/cn";
import { Cross2Icon } from "@radix-ui/react-icons";

interface IModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  onClose: () => void;
}

export function Modal({
  open,
  children,
  title,
  rightAction,
  onClose,
}: IModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            "modal-overlay",
          )}
        />

        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 z-[51] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none",
            "modal-content",
          )}
        >
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="grid h-12 w-12 cursor-pointer place-items-center outline-none"
            >
              <Cross2Icon className="h-6 w-6" />
            </button>

            <Dialog.Title className="text-lg font-bold tracking-[-1px]">
              {title}
            </Dialog.Title>

            <div className="grid h-12 w-12 place-items-center">
              {rightAction}
            </div>
          </header>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
