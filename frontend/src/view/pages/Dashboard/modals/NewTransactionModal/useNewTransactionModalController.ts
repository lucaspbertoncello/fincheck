import { useDashboard } from "../../../../../app/hooks/useDashboard";

export function useNewTransactionModalController() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } =
    useDashboard();

  return {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  };
}
