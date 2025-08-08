import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";

export function Accounts() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
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
        <header className="flex items-center justify-between">
          <strong className="text-lg tracking-[-1px] text-white">
            Minhas contas
          </strong>

          <div>
            <button className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>

            <button className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors hover:bg-black/10 disabled:pointer-events-none disabled:opacity-40">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </header>

        <div className="mt-4 flex gap-4">
          <AccountCard
            color="#7950f2"
            bankAccountName="Nubank"
            balance={9845.33}
            bankAccountIcon="CASH"
          />
          <AccountCard
            color="#ff7f08"
            bankAccountName="Inter"
            balance={333.21}
            bankAccountIcon="CHECKING"
          />
          <AccountCard
            color="#ba1e62"
            bankAccountName="Bradesco"
            balance={100000.0}
            bankAccountIcon="INVESTMENT"
          />
        </div>
      </div>
      {/* bank accounts area */}
    </div>
  );
}
