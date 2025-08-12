import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { MONTHS } from "../../../../../app/config/constants";
import { TransactionsSliderOption } from "./TransactionsSliderOption";
import { TransactionsSliderNavigation } from "./TransactionsSliderNavigation";

export function Transactions() {
  return (
    <div className="h-full w-full rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      <header>
        {/* transactions filter */}
        <div className="flex items-center justify-between">
          <button className="flex cursor-pointer items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button className="cursor-pointer">
            <FilterIcon />
          </button>
        </div>
        {/* transactions filter */}

        {/* months slider */}
        <div className="relative mt-6">
          <Swiper slidesPerView={3} centeredSlides>
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <TransactionsSliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
            <TransactionsSliderNavigation />
          </Swiper>
        </div>
        {/* months slider */}
      </header>

      <div className="mt-4 bg-indigo-500">conteudo</div>
    </div>
  );
}
