import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/lib/cn";
import { formatDate } from "../../app/utils/formatDate";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface IDatePickerInputProps {
  className?: string;
  error?: string;
  value: Date;
  onChange(date: Date): void;
}

export function DatePickerInput({ className, error, value, onChange }: IDatePickerInputProps) {
  function handleChangeDate(date: Date) {
    onChange(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-left text-gray-700 transition-all outline-none placeholder:text-gray-700 focus:border-gray-800",
              error && "!border-red-900",
              className,
            )}
          >
            <span className="pointer-events-none absolute top-2 left-[13px] text-xs text-gray-700">
              Data
            </span>

            <span>{formatDate(value)}</span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={value} onChange={handleChangeDate} />
        </Popover.Content>
      </Popover.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-xs text-red-900">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
