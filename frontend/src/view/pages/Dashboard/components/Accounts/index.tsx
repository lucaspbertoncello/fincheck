import { AccountCard } from "./AccountCard";
import { EyeIcon } from "../../../../components/icons/EyeIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { useState } from "react";

export function Accounts() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {/* top area */}
      <header>
        <span className="block tracking-[-0.5px] text-white">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 100.000,00
          </strong>

          <button className="flex h-8 w-8 cursor-pointer items-center justify-center">
            <EyeIcon open={false} />
          </button>
        </div>
      </header>
      {/* top area */}

      {/* bank accounts area */}
      <div className="flex flex-1 flex-col justify-end">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
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
                isBeginning={isBeginning}
                isEnd={isEnd}
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
      </div>
      {/* bank accounts area */}
    </div>
  );
}
