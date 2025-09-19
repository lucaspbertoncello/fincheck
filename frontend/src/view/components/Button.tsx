import type { ComponentProps } from "react";
import { cn } from "../../app/lib/cn";
import { Spinner } from "./Spinner";

interface IButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children, ...props }: IButtonProps) {
  return (
    <button
      className={cn(
        `transition-alldisabled:cursor-not-allowed mt-2 flex h-[54px] w-full cursor-pointer items-center justify-center gap-4 rounded-2xl bg-teal-900 font-medium tracking-[-0.5px] text-white hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400`,
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner />}
      {!isLoading && children}
    </button>
  );
}
