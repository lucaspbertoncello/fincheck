import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen, register, errors, handleSubmit, control } =
    useNewAccountModalController();

  return (
    <Modal title="Nova conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal}>
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-sm tracking-[-0.5px] text-gray-600">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>

            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Input
            type="text"
            placeholder="Nome da conta"
            errors={errors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo da conta"
                error={errors.type?.message}
                onChange={onChange}
                value={value}
              >
                <Select.Item value="CHECKING">Conta Corrente</Select.Item>
                <Select.Item value="INVESTMENT">Investimentos</Select.Item>
                <Select.Item value="CASH">Dinheiro Físico</Select.Item>
              </Select>
            )}
          />

          <ColorsDropdownInput error={errors.color?.message} />
          <Button>Criar conta</Button>
        </div>
      </form>
    </Modal>
  );
}
