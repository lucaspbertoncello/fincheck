import type { User } from "../../entities/User";
import { httpClient } from "../httpClient";

export async function me() {
  const data = await httpClient.get<User>("users/me");
  return data;
}
