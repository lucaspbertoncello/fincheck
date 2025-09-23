import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
    register,
    handleSubmit,
    errors,
    control,
  } = useNewTransactionModalController();

  const transactionType = newTransactionType === "EXPENSE" ? "despesa" : "receita";

  return (
    <Modal
      title={`Nova ${transactionType}`}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-sm tracking-[-0.5px] text-gray-600">
            Valor da {transactionType}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <Controller
              name="value"
              control={control}
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency onChange={onChange} value={value} error={errors.value?.message} />
              )}
            />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Input
            type="text"
            placeholder={`Nome da ${transactionType}`}
            {...register("name")}
            errors={errors.name?.message}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder={`Categoria da ${transactionType}`}
                onChange={onChange}
                value={value}
                error={errors.categoryId?.message}
              >
                <Select.Item value="CHECKING">Conta Corrente</Select.Item>
                <Select.Item value="INVESTMENT">Investimentos</Select.Item>
                <Select.Item value="CASH">Dinheiro Físico</Select.Item>
              </Select>
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
                placeholder={newTransactionType === "EXPENSE" ? "Pagar com" : "Receber com"}
              >
                <Select.Item value="CHECKING">Conta Corrente</Select.Item>
                <Select.Item value="INVESTMENT">Investimentos</Select.Item>
                <Select.Item value="CASH">Dinheiro Físico</Select.Item>
              </Select>
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput value={value} onChange={onChange} error={errors.date?.message} />
            )}
          />

          <Button>Criar {transactionType}</Button>
        </div>
      </form>
    </Modal>
  );
}
