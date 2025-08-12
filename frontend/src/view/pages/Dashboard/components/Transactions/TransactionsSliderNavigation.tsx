import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function TransactionsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="absolute top-1/2 left-0 z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-gray-100 bg-gradient-to-r from-gray-100 to-transparent"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      <button
        className="absolute top-1/2 right-0 z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-gray-100 bg-gradient-to-l from-gray-100 to-transparent"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
}
