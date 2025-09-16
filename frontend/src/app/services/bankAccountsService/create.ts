import { httpClient } from "../httpClient";

interface IBankAccountRequest {
  name: string;
  initialBalance: number;
  type: "CHECKING" | "INVESTMENT" | "CASH";
  color: string;
}

export async function create(params: IBankAccountRequest) {
  const data = await httpClient.post("/bank-accounts", params);
  return data;
}
