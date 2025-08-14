import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isTransactionsFilterModalOpen, setIsTransactionsFilterModalOpen] =
    useState(true);

  function handleOpenTransactionsFilterModal() {
    setIsTransactionsFilterModalOpen(true);
  }

  function handleCloseTransactionsFilterModal() {
    setIsTransactionsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    isTransactionsFilterModalOpen,
    handleOpenTransactionsFilterModal,
    handleCloseTransactionsFilterModal,
    transactions: [],
  };
}
