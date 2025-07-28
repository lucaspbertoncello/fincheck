import type { ComponentProps } from "react";
import { cn } from "../../app/lib/cn";
import { Spinner } from "./Spinner";

interface IButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(
        `
        mt-2 w-full bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400
        transition-all h-[54px] text-white rounded-2xl cursor-pointer font-medium tracking-[-0.5px]
        disabled:cursor-not-allowed flex items-center justify-center gap-4
      `,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}
