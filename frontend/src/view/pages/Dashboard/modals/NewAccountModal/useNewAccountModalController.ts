import z from "zod";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";

const schema = z.object({
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  name: z.string().nonempty("Nome da Conta é obrigatório"),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type TFormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { closeNewAccountModal, isNewAccountModalOpen } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: TFormData) =>
      bankAccountsService.create({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      }),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Conta cadastrada com sucesso");
      closeNewAccountModal();
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] }); // bankAccount list update when create another
      reset(); // reset form fields after submit
    } catch {
      toast.error("Erro ao criar conta bancária");
    }
  });

  return {
    closeNewAccountModal,
    isNewAccountModalOpen,
    register,
    handleSubmit,
    errors,
    control,
    isPending,
  };
}
