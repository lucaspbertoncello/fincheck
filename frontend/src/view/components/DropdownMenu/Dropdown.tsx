import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../../app/lib/cn";

interface IDropdownProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

export function DropdownRoot({ children }: IDropdownProps) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

export function DropdownTrigger({ children, className }: IDropdownProps) {
  return (
    <RdxDropdownMenu.Trigger className={cn("outline-none", className)}>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

export function DropdownContent({ children, className }: IDropdownProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "z-[99] space-y-2 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          "dropdown-content",
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

export function DropdownItem({
  children,
  className,
  onSelect,
}: IDropdownProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "flex min-h-[40px] cursor-pointer items-center gap-4 rounded-2xl px-4 py-2 text-sm text-gray-800 transition-colors outline-none data-[highlighted]:bg-gray-50",
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
