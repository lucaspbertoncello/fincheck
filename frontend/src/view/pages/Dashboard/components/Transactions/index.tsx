import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { useTransactionsController } from "./useTransactionsController";
import { TransactionsSliderOption } from "./TransactionsSliderOption";
import { TransactionsSliderNavigation } from "./TransactionsSliderNavigation";
import { TransactionsFilterModal } from "./TransactionsFilterModal";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/lib/cn";
import { Spinner } from "../../../../components/Spinner";
import transactionsEmptyState from "../../../../../assets/images/transactions-empty-state.svg";
import { FilterIcon } from "../../../../components/icons/FilterIcon";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isTransactionsFilterModalOpen,
    handleOpenTransactionsFilterModal,
    handleCloseTransactionsFilterModal,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      {!isInitialLoading && (
        <>
          <TransactionsFilterModal
            open={isTransactionsFilterModalOpen}
            onClose={handleCloseTransactionsFilterModal}
          />

          <header>
            {/* transactions filter */}
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button
                className="cursor-pointer"
                onClick={handleOpenTransactionsFilterModal}
              >
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
            {hasTransactions && !isLoading && (
              <>
                {/* transaction card */}
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                  {/* transaction info */}
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="expense" />

                    <div>
                      <strong className="font-bold tracking-[-0.5px]">
                        Almoço
                      </strong>
                      <span className="block text-sm text-gray-600">
                        12/08/2025
                      </span>
                    </div>
                  </div>
                  {/* transaction info */}

                  {/* transaction cost */}
                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-red-800",
                      !areValuesVisible && "blur-sm",
                    )}
                  >
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
                      <span className="block text-sm text-gray-600">
                        12/08/2025
                      </span>
                    </div>
                  </div>
                  {/* transaction info */}

                  {/* transaction cost */}
                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-green-800",
                      !areValuesVisible && "blur-sm",
                    )}
                  >
                    + {formatCurrency(5000.3)}
                  </span>
                  {/* transaction cost */}
                </div>
                {/* transaction card */}
              </>
            )}

            {isLoading && (
              <div className="grid h-full w-full place-items-center">
                <Spinner className="h-10 w-10" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <>
                  <img
                    src={transactionsEmptyState}
                    alt="Nenhuma transação cadastrada"
                  />

                  <p className="text-gray-700">
                    Não encontramos nenhuma transação
                  </p>
                </>
              </div>
            )}
          </div>
        </>
      )}

      {isInitialLoading && (
        <div className="grid h-full w-full place-items-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}
    </div>
  );
}
