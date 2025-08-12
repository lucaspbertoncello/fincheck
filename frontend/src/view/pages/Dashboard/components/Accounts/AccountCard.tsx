import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { cn } from "../../../../../app/lib/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../components/icons/bankAccountType";

interface IAccountCardProps {
  color: string;
  bankAccountName: string;
  balance: number;
  bankAccountIcon: "CASH" | "CHECKING" | "INVESTMENT";
}

export function AccountCard({
  color,
  bankAccountName,
  balance,
  bankAccountIcon,
}: IAccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="flex h-[200px] w-full flex-col justify-between rounded-2xl border-b-4 bg-white p-4"
      style={{ borderColor: color }}
    >
      <header>
        <BankAccountTypeIcon type={bankAccountIcon} />
        <span className="mt-4 block font-medium tracking-[=0.5px] text-gray-800">
          {bankAccountName}
        </span>
      </header>

      <div>
        <span
          className={cn(
            "mt-4 block font-medium tracking-[=0.5px] text-gray-800",
            !areValuesVisible && "blur-sm",
          )}
        >
          {formatCurrency(balance)}
        </span>

        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
