import { useCallback, useState } from "react";
import { DashboardContext } from "./context";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState<boolean>(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);
  const [newTransactionType, setNewTransactionType] = useState<"INCOME" | "EXPENSE" | null>(null);

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: "INCOME" | "EXPENSE") => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValueVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        isNewTransactionModalOpen,
        openNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
