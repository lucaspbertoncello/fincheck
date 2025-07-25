import { sleep } from "../../lib/sleep";
import { httpClient } from "../httpClient";

export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
}

interface ISignupResponse {
  acessToken: string;
}

export async function signup(params: ISignupRequest) {
  await sleep(500);
  const { data } = await httpClient.post<ISignupResponse>(
    "/auth/signup",
    params
  );
  return data;
}
