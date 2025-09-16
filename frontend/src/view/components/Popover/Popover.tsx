import * as RdxPopover from "@radix-ui/react-popover";
import { cn } from "../../../app/lib/cn";
import { useEffect, useState } from "react";

interface IPopoverProps {
  children: React.ReactNode;
  className?: string;
}

export function PopoverRoot({ children }: IPopoverProps) {
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
    <RdxPopover.Root open={open} onOpenChange={setOpen}>
      {children}
    </RdxPopover.Root>
  );
}

export function PopoverTrigger({ children, className }: IPopoverProps) {
  return (
    <RdxPopover.Trigger className={cn("outline-none", className)} asChild>
      {children}
    </RdxPopover.Trigger>
  );
}

export function PopoverContent({ children, className }: IPopoverProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          "z-[51] space-y-2 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          "dropdown-content",
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}
