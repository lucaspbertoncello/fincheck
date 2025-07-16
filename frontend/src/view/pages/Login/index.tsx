import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <div className="w-full">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>

        <span className="text-gray-700 tracking-[-0.5px]">
          Novo por aqui?{" "}
          <Link className="text-teal-900 font-medium" to="/register">
            Crie uma conta
          </Link>
        </span>
      </header>

      <form className="flex flex-col justify-center gap-4 mt-14">
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}
