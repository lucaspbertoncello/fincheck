import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";

import { authService } from "../../../app/services/authService";
import type { ISigninRequest } from "../../../app/services/authService/signin";

import toast from "react-hot-toast";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type TFormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: ISigninRequest) => authService.signin(data),
    mutationKey: ["signin"],
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { acessToken } = await mutateAsync(data);
      console.log({ acessToken });
    } catch {
      toast.error(
        "Erro ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  });

  return { handleSubmit, register, errors, isPending };
}
