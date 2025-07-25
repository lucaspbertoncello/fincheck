import type { ComponentProps } from "react";
import { cn } from "../../app/lib/cn";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        mt-2 w-full bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400
        transition-all h-[54px] text-white rounded-2xl cursor-pointer font-medium tracking-[-0.5px]
        disabled:cursor-not-allowed
      `,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    />
  );
}
