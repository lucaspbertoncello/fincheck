import * as RdxSelect from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../app/lib/cn";

interface ISelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Select({
  className,
  error,
  placeholder,
  value,
  onChange,
  children,
}: ISelectProps) {
  return (
    <div>
      <RdxSelect.Root value={value} onValueChange={onChange}>
        <RdxSelect.Trigger
          className={cn(
            "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-gray-800 transition-all outline-none placeholder:text-gray-700 focus:border-gray-800",
            error && "!border-red-900",
            className,
          )}
        >
          <RdxSelect.Value placeholder={placeholder} />
          <RdxSelect.Icon className="absolute top-1/2 right-3 -translate-y-1/2">
            <ChevronDownIcon className="h-6 w-6 text-gray-800" />
          </RdxSelect.Icon>
        </RdxSelect.Trigger>

        <RdxSelect.Portal>
          <RdxSelect.Content
            className={cn(
              "z-[99] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
            )}
          >
            <RdxSelect.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white">
              <ChevronUpIcon />
            </RdxSelect.ScrollUpButton>

            <RdxSelect.Viewport className="p-2">{children}</RdxSelect.Viewport>

            <RdxSelect.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
              <ChevronDownIcon />
            </RdxSelect.ScrollDownButton>
          </RdxSelect.Content>
        </RdxSelect.Portal>
      </RdxSelect.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-xs text-red-900">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function SelectItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RdxSelect.Item
      value={value}
      className={cn(
        "flex h-10 cursor-pointer items-center rounded-lg px-3 text-sm text-gray-800 transition-colors outline-none data-[highlighted]:bg-gray-50 data-[state=checked]:font-bold",
        className,
      )}
    >
      <RdxSelect.ItemText>{children}</RdxSelect.ItemText>
    </RdxSelect.Item>
  );
}

Select.Item = SelectItem;
