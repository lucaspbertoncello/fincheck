import { httpClient } from "../httpClient";

interface IMeResponse {
  name: string;
  email: string;
}

export async function me() {
  const data = await httpClient.get<IMeResponse>("users/me");
  return data;
}
