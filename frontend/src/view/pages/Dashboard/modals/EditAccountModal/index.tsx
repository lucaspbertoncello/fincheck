import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useEditAccountModalController } from "./useEditAccountModalController";
import { TrashIcon } from "../../../../components/icons/TrashIcon";
import { ConfirmDeleteModal } from "../../../../components/ConfirmDeleteModal";

export function EditAccountModal() {
  const {
    closeEditAccountModal,
    isEditAccountModalOpen,
    register,
    errors,
    handleSubmit,
    control,
    isPending,
    openConfirmDeleteModal,
    closeConfirmDeleteModal,
    isConfirmDeleteModalOpen,
    handleDeleteAccount,
    isDeletingAccount,
  } = useEditAccountModalController();

  if (isConfirmDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        onConfirm={handleDeleteAccount}
        isDeleting={isDeletingAccount}
        isOpen={isConfirmDeleteModalOpen}
        onClose={closeConfirmDeleteModal}
        title="Tem certeza que deseja excluir essa conta?"
        description="Ao excluir a conta, também serão excluídas todos os registros de receitas e despesas relacionados."
      />
    );
  }

  return (
    <Modal
      title="Editar conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
      rightAction={
        <button className="cursor-pointer" onClick={openConfirmDeleteModal}>
          <TrashIcon className="h-6 w-6 text-red-900" />
        </button>
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-sm tracking-[-0.5px] text-gray-600">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>

            <Controller
              control={control}
              name="initialBalance"
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

          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Button isLoading={isPending}>Atualizar conta</Button>
        </div>
      </form>
    </Modal>
  );
}
