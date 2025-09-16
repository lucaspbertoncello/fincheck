import { AccountCard } from "./AccountCard";
import { EyeIcon } from "../../../../components/icons/EyeIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/lib/cn";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts,
    openNewAccountModal,
  } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {!isLoading && (
        <>
          {/* balance area */}
          <header>
            <span className="block tracking-[-0.5px] text-white">
              Saldo total
            </span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md",
                )}
              >
                {formatCurrency(500000.0)}
              </strong>

              <button
                onClick={toggleValueVisibility}
                className="flex h-8 w-8 cursor-pointer items-center justify-center"
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </header>
          {/* balance area */}

          {/* bank accounts area */}
          <div className="flex flex-1 flex-col justify-end">
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <header
                    slot="container-start"
                    className="mb-4 flex items-center justify-between"
                  >
                    <strong className="text-lg tracking-[-1px] text-white">
                      Minhas contas
                    </strong>

                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </header>

                  <SwiperSlide>
                    <AccountCard
                      color="#7950f2"
                      bankAccountName="Nubank"
                      balance={9845.33}
                      bankAccountIcon="CASH"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      color="#ff7f08"
                      bankAccountName="Inter"
                      balance={333.21}
                      bankAccountIcon="CHECKING"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      color="#ba1e62"
                      bankAccountName="Bradesco"
                      balance={100000.0}
                      bankAccountIcon="INVESTMENT"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}

            {accounts.length === 0 && (
              <>
                <header slot="container-start" className="mb-4">
                  <strong className="text-lg tracking-[-1px] text-white">
                    Minhas contas
                  </strong>
                </header>

                <button
                  onClick={openNewAccountModal}
                  className="mt-4 flex h-52 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>

                  <span className="block w-32 text-center font-medium tracking-[-0.5px]">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
          </div>
          {/* bank accounts area */}
        </>
      )}

      {isLoading && (
        <div className="grid h-full w-full place-items-center">
          <Spinner className="h-10 w-10 fill-white text-teal-950/50" />
        </div>
      )}
    </div>
  );
}
