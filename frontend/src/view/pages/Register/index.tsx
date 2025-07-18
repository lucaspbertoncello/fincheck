import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Register() {
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

      <form className="flex flex-col justify-center gap-4 mt-14">
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Criar conta</Button>
      </form>
    </div>
  );
}
