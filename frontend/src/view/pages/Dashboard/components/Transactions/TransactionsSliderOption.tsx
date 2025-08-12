import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/lib/cn";

interface ITransactionsSliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function TransactionsSliderOption({
  isActive,
  month,
  index,
}: ITransactionsSliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "h-12 w-full cursor-pointer rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800",
        isActive && "bg-white",
      )}
    >
      {month}
    </button>
  );
}
