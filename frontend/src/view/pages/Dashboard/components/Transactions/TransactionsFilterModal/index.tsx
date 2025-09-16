import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useTransactionsFilterModal } from "./useTransactionsFilterModal";
import { cn } from "../../../../../../app/lib/cn";

interface ITransactionsFilterModalProps {
  open: boolean;
  onClose: () => void;
}

const mockedAccounts = [
  {
    id: "123",
    name: "Nubank",
  },
  {
    id: "456",
    name: "Santander",
  },
  {
    id: "789",
    name: "Inter",
  },
];

export function TransactionsFilterModal({
  open,
  onClose,
}: ITransactionsFilterModalProps) {
  const {
    handleSelectBankAccountId,
    handleChangeYear,
    selectedBankAccountId,
    selectedYear,
  } = useTransactionsFilterModal();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="text-lg font-bold tracking-[-1px] text-gray-800">
          Conta
        </span>

        <div className="mt-2 space-y-2">
          {mockedAccounts.map((account) => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccountId(account.id)}
              className={cn(
                "w-full cursor-pointer rounded-2xl p-2 text-left text-gray-800 transition-colors hover:bg-gray-50",
                account.id === selectedBankAccountId && "!bg-gray-200",
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">Ano</span>

        <div className="mt-2 flex w-52 items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="grid h-12 w-12 cursor-pointer place-items-center"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>

          <button
            onClick={() => handleChangeYear(1)}
            className="grid h-12 w-12 cursor-pointer place-items-center"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button className="mt-10">Aplicar Filtros</Button>
    </Modal>
  );
}
