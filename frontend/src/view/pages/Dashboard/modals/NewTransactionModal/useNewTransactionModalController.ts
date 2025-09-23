import z from "zod";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../app/hooks/useCategories";

const schema = z.object({
  value: z.string().nonempty("Valor é obrigatório"),
  name: z.string().nonempty("Nome é obrigatório"),
  categoryId: z.string().nonempty("Categoria é obrigatória"),
  bankAccountId: z.string().nonempty("Conta bancária é obrigatória"),
  date: z.date(),
});

type TFormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } =
    useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  const { data } = useBankAccounts();
  const { categories } = useCategories();

  return {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
    register,
    handleSubmit,
    errors,
    control,
    accounts: data ?? [],
    categories: categories ?? [],
  };
}
