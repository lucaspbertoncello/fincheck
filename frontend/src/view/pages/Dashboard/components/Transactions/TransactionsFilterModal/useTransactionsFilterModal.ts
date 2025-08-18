import { useState } from "react";

export function useTransactionsFilterModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );

  function handleSelectBankAccountId(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId,
    );
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
  }

  return {
    handleSelectBankAccountId,
    handleChangeYear,
    selectedBankAccountId,
    selectedYear,
  };
}
