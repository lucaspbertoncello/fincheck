import type { ComponentProps } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/lib/cn";

interface IInputProps extends ComponentProps<"input"> {
  errors?: string;
}

export function Input({ placeholder, errors, ...props }: IInputProps) {
  return (
    <div className="relative">
      <input
        id={placeholder}
        {...props}
        placeholder=" "
        className={cn(
          `
          w-full h-[52px] px-3 outline-0 bg-white rounded-lg border border-gray-500 text-gray-800
          placeholder-shown:pt-0 pt-4 peer focus:border-gray-800 transition-all
        `,
          errors && "border-red-900 focus:border-red-900"
        )}
      />

      <label
        htmlFor={placeholder}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-900 peer-placeholder-shown:top-3.5
        peer-placeholder-shown:text-base transition-all
        "
      >
        {placeholder}
      </label>

      {errors && (
        <div className="flex items-center gap-2 mt-2">
          <CrossCircledIcon className="text-red-900" />
          <span className="text-xs text-red-900">{errors}</span>
        </div>
      )}
    </div>
  );
}
