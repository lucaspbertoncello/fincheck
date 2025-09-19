import { createContext } from "react";
import type { BankAccount } from "../../entities/BankAccount";

interface IDashboardContext {
  // new account modal
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  // edit account modal
  isEditAccountModalOpen: boolean;
  accountBeingEdited: BankAccount | null;
  openEditAccountModal: (bankAccount: BankAccount) => void;
  closeEditAccountModal: () => void;
  // new transaction modal
  openNewTransactionModal: (type: "INCOME" | "EXPENSE") => void;
  closeNewTransactionModal: () => void;
  isNewTransactionModalOpen: boolean;
  newTransactionType: "INCOME" | "EXPENSE" | null;
  // values visibility
  toggleValueVisibility: () => void;
  areValuesVisible: boolean;
}

export const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext);
