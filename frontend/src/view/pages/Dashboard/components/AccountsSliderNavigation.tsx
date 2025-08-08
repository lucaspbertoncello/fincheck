import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
