import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { register, handleSubmit, errors } = useRegisterController();

  return (
    <div className="w-full">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Crie sua conta
        </h1>

        <span className="text-gray-700 tracking-[-0.5px]">
          Já possuí uma conta?{" "}
          <Link className="text-teal-900 font-medium" to="/login">
            Fazer login
          </Link>
        </span>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 mt-14"
      >
        <Input
          type="text"
          placeholder="Nome"
          {...register("name")}
          errors={errors.name?.message}
        />

        <Input
          type="text"
          placeholder="E-mail"
          {...register("email")}
          errors={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          errors={errors.password?.message}
        />

        <Button type="submit">Criar conta</Button>
      </form>
    </div>
  );
}
