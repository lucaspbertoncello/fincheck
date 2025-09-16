import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex cursor-pointer items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
            Transações
          </span>
          <ChevronDownIcon className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item className="gap-2">
          <IncomeIcon /> Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon /> Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon /> Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
