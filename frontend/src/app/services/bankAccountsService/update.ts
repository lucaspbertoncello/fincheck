import type { BankAccount } from "../../entities/BankAccount";
import { httpClient } from "../httpClient";

interface IUpdateBankAccountParams {
  id: string;
  data: Partial<BankAccount>;
}

export async function update(params: IUpdateBankAccountParams) {
  const data = await httpClient.put<BankAccount>(`/bank-accounts/${params.id}`, params.data);
  return data;
}
