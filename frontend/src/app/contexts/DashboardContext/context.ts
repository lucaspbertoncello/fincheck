import { createContext } from "react";

interface IDashboardContext {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  toggleValueVisibility: () => void;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext,
);
