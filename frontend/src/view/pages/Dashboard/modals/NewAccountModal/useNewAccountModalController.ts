import z from "zod";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("Nome da conta é obrigatório"),
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { closeNewAccountModal, isNewAccountModalOpen } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      initialBalance: "0",
      type: "CHECKING",
      color: "",
    },
  });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  return {
    closeNewAccountModal,
    isNewAccountModalOpen,
    register,
    handleSubmit,
    errors,
    control,
  };
}
