import z from "zod";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";
import { useEffect, useState } from "react";

const schema = z.object({
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  name: z.string().nonempty("Nome da Conta é obrigatório"),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type TFormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal, accountBeingEdited } = useDashboard();
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState<boolean>(false);

  function openConfirmDeleteModal() {
    setIsConfirmDeleteModalOpen(true);
  }

  function closeConfirmDeleteModal() {
    setIsConfirmDeleteModalOpen(false);
  }

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (accountBeingEdited) {
      reset({
        name: accountBeingEdited?.name,
        type: accountBeingEdited?.type,
        color: accountBeingEdited?.color,
        initialBalance: accountBeingEdited?.initialBalance.toString(),
      });
    }
  }, [accountBeingEdited, reset]);

  const queryClient = useQueryClient();

  // update account
  const { mutateAsync: updateAccount, isPending } = useMutation({
    mutationFn: (data: TFormData) =>
      bankAccountsService.update({
        id: accountBeingEdited!.id, // non null assertion operator
        data: {
          ...data,
          initialBalance: currencyStringToNumber(data.initialBalance),
        },
      }),
  });

  // delete account
  const { mutateAsync: deleteAccount, isPending: isDeletingAccount } = useMutation({
    mutationFn: () => bankAccountsService.delete(accountBeingEdited!.id),
  });

  async function handleDeleteAccount() {
    try {
      await deleteAccount();
      toast.success("Conta excluída com sucesso");
      closeConfirmDeleteModal();
      closeEditAccountModal();
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] }); // bankAccount list update when delete another
    } catch {
      toast.error("Erro ao excluir conta bancária");
    }
  }

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await updateAccount(data);
      toast.success("Conta atualizada com sucesso");
      closeEditAccountModal();
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] }); // bankAccount list update when create another
    } catch {
      toast.error("Erro ao atualizar conta bancária");
    }
  });

  return {
    closeEditAccountModal,
    isEditAccountModalOpen,
    register,
    handleSubmit,
    errors,
    control,
    isPending,
    openConfirmDeleteModal,
    closeConfirmDeleteModal,
    isConfirmDeleteModalOpen,
    handleDeleteAccount,
    isDeletingAccount,
  };
}
