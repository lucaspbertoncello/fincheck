import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../app/lib/cn";
import { useState, useEffect } from "react";

interface IDropdownProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

export function DropdownRoot({ children }: IDropdownProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      const cleanup = () => {
        document.body.style.pointerEvents = "";
        document.body.style.overflow = "";

        document.body.classList.remove("overflow-hidden");
      };

      cleanup();
      const timer = setTimeout(cleanup, 100);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <RdxDropdownMenu.Root open={open} onOpenChange={setOpen}>
      {children}
    </RdxDropdownMenu.Root>
  );
}

export function DropdownTrigger({ children, className }: IDropdownProps) {
  return (
    <RdxDropdownMenu.Trigger className={cn("outline-none", className)} asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

export function DropdownContent({ children, className }: IDropdownProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "z-[51] space-y-2 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          "dropdown-content",
          className,
        )}
        sideOffset={8}
        align="end"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          setTimeout(() => {
            document.body.style.pointerEvents = "";
          }, 0);
        }}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

export function DropdownItem({ children, className, onSelect }: IDropdownProps) {
  const handleSelect = () => {
    onSelect?.();

    setTimeout(() => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
    }, 0);
  };

  return (
    <RdxDropdownMenu.Item
      onSelect={handleSelect}
      className={cn(
        "flex min-h-[40px] cursor-pointer items-center gap-4 rounded-2xl px-4 py-2 text-sm text-gray-800 transition-colors outline-none data-[highlighted]:bg-gray-50",
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
