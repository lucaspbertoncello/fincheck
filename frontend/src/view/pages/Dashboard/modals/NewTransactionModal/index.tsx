import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } =
    useNewTransactionModalController();

  const transactionType = newTransactionType === "EXPENSE" ? "despesa" : "receita";

  return (
    <Modal
      title={`Nova ${transactionType}`}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form action="">
        <div>
          <span className="text-sm tracking-[-0.5px] text-gray-600">
            Valor da {transactionType}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Input type="text" placeholder={`Nome da ${transactionType}`} />

          <Select placeholder={`Categoria da ${transactionType}`}>
            <Select.Item value="CHECKING">Conta Corrente</Select.Item>
            <Select.Item value="INVESTMENT">Investimentos</Select.Item>
            <Select.Item value="CASH">Dinheiro Físico</Select.Item>
          </Select>

          <Select placeholder={newTransactionType === "EXPENSE" ? "Pagar com" : "Receber com"}>
            <Select.Item value="CHECKING">Conta Corrente</Select.Item>
            <Select.Item value="INVESTMENT">Investimentos</Select.Item>
            <Select.Item value="CASH">Dinheiro Físico</Select.Item>
          </Select>

          <DatePickerInput />

          <Button>Criar {transactionType}</Button>
        </div>
      </form>
    </Modal>
  );
}
