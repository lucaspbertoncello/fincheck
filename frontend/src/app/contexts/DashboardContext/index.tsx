import { useCallback, useState } from "react";
import { DashboardContext } from "./context";
import type { BankAccount } from "../../entities/BankAccount";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState<boolean>(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState<boolean>(false);
  const [accountBeingEdited, setAccountBeingEdited] = useState<BankAccount | null>(null);
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

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setAccountBeingEdited(bankAccount);
    setIsEditAccountModalOpen(true);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setAccountBeingEdited(null);
    setIsEditAccountModalOpen(false);
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
        openEditAccountModal,
        closeEditAccountModal,
        isEditAccountModalOpen,
        accountBeingEdited,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
