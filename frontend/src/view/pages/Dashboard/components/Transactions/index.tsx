import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { MONTHS } from "../../../../../app/config/constants";
import { TransactionsSliderOption } from "./TransactionsSliderOption";
import { TransactionsSliderNavigation } from "./TransactionsSliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";

export function Transactions() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
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

      <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
        {/* transaction card */}
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
          {/* transaction info */}
          <div className="flex flex-1 items-center gap-3">
            <CategoryIcon type="expense" />

            <div>
              <strong className="font-bold tracking-[-0.5px]">Almoço</strong>
              <span className="block text-sm text-gray-600">12/08/2025</span>
            </div>
          </div>
          {/* transaction info */}

          {/* transaction cost */}
          <span className="font-medium tracking-[-0.5px] text-red-800">
            - {formatCurrency(1323.3)}
          </span>
          {/* transaction cost */}
        </div>
        {/* transaction card */}

        {/* transaction card */}
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
          {/* transaction info */}
          <div className="flex flex-1 items-center gap-3">
            <CategoryIcon type="income" />

            <div>
              <strong className="font-bold tracking-[-0.5px]">
                Freelancer
              </strong>
              <span className="block text-sm text-gray-600">12/08/2025</span>
            </div>
          </div>
          {/* transaction info */}

          {/* transaction cost */}
          <span className="font-medium tracking-[-0.5px] text-green-800">
            + {formatCurrency(5000.3)}
          </span>
          {/* transaction cost */}
        </div>
        {/* transaction card */}
      </div>
    </div>
  );
}
