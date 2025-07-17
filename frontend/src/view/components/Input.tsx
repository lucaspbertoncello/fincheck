import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        className="w-full h-[52px] px-3 outline-0 bg-white rounded-lg border border-gray-500 text-gray-800
        placeholder-shown:pt-0 pt-4 peer focus:border-gray-800 transition-all"
        id={placeholder}
        {...props}
        placeholder=" "
      />

      <label
        htmlFor={placeholder}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-900 peer-placeholder-shown:top-3.5
        peer-placeholder-shown:text-base transition-all
        "
      >
        {placeholder}
      </label>
    </div>
  );
}
