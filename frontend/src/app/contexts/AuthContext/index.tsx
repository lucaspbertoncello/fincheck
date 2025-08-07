import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./context";
import { localStorageKeys } from "../../config/localStorageKeys";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import toast from "react-hot-toast";
import { PageLoader } from "../../../view/components/PageLoader";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAcessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN);
    return !!storedAcessToken;
  });

  const queryClient = useQueryClient();

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => userService.me(),
    enabled: isAuthenticated, // only execute if authenticated
    staleTime: Infinity, // do not refetch unless necessary
    refetchOnReconnect: true, // refetch when the browser reconnects
    refetchOnWindowFocus: false, // do not refetch on window focus
  });

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACESS_TOKEN, acessToken);
    setIsAuthenticated(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACESS_TOKEN);
    setIsAuthenticated(false);

    queryClient.removeQueries({ queryKey: ["users", "me"] });
    queryClient.clear();
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      toast.error("Session expired. Please log in again.");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isSuccess && isAuthenticated, signin, signout }}
    >
      <PageLoader isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
