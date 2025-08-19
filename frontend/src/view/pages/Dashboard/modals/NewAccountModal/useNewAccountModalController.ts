import { useDashboard } from "../../../../../app/hooks/useDashboard";

export function useNewAccountModalController() {
  const { closeNewAccountModal, isNewAccountModalOpen } = useDashboard();

  return {
    closeNewAccountModal,
    isNewAccountModalOpen,
  };
}
