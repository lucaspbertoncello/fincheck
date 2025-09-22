import { httpClient } from "../httpClient";

export async function deleteAccount(accountId: string) {
  await httpClient.delete(`/bank-accounts/${accountId}`);
}
