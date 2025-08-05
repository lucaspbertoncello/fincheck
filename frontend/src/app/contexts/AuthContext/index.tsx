import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./context";
import { localStorageKeys } from "../../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import toast from "react-hot-toast";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAcessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN);
    return !!storedAcessToken;
  });

  const { isError } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => userService.me(),
    enabled: isAuthenticated, // only execute if authenticated
  });

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACESS_TOKEN, acessToken);
    setIsAuthenticated(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACESS_TOKEN);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Session expired. Please log in again.");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
