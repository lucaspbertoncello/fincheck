import { useMemo, useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../../../../../app/hooks/useDashboard";
import { useQuery } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { areValuesVisible, toggleValueVisibility, openNewAccountModal, openEditAccountModal } =
    useDashboard();

  const windowWidth = useWindowWidth();

  const { isFetching, data } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: bankAccountsService.getAll,
  });

  const totalAccountsBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, acc) => total + acc.currentBalance, 0);
  }, [data]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading: isFetching,
    openNewAccountModal,
    openEditAccountModal,
    accounts: data ?? [],
    totalAccountsBalance,
  };
}
