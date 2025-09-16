import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface ISigninRequest {
  email: string;
  password: string;
}

interface ISigninResponse {
  acessToken: string;
}

export async function signin(params: ISigninRequest) {
  await sleep(500);
  const { data } = await httpClient.post<ISigninResponse>(
    "auth/signin",
    params
  );
  return data;
}
