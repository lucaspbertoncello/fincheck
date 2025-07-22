import { httpClient } from "../httpClient";

interface ISignupRequest {
  name: string;
  email: string;
  password: string;
}

interface ISignupResponse {
  acessToken: string;
}

export async function signup(params: ISignupRequest) {
  const { data } = await httpClient.post<ISignupResponse>(
    "/auth/signup",
    params
  );
  return data;
}
