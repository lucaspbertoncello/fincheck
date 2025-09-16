import { createContext } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  signin: (acessToken: string) => void;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
