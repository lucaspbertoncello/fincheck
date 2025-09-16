import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface IAccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  isBeginning,
  isEnd,
}: IAccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
