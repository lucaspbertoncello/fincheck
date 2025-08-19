import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form action="">
        <div>
          <span className="text-sm tracking-[-0.5px] text-gray-600">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Input type="text" placeholder="Nome da conta" />

          <Select placeholder="Tipo da conta">
            <Select.Item value="CHECKING">Conta Corrente</Select.Item>
            <Select.Item value="INVESTMENT">Investimentos</Select.Item>
            <Select.Item value="CASH">Dinheiro Físico</Select.Item>
          </Select>
        </div>
      </form>
    </Modal>
  );
}
