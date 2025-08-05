import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./app/contexts/AuthContext";
import { queryClient } from "./app/lib/queryClient";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
