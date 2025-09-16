import { createContext } from "react";

interface IDashboardContext {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: "INCOME" | "EXPENSE" | null;
  toggleValueVisibility: () => void;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  openNewTransactionModal: (type: "INCOME" | "EXPENSE") => void;
  closeNewTransactionModal: () => void;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext,
);
