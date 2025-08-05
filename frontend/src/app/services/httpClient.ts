import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// add a request interceptor to include the access token in the headers, if token exists
httpClient.interceptors.request.use((config) => {
  const acessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN);

  if (acessToken) {
    config.headers.Authorization = `Bearer ${acessToken}`;
  }

  return config;
});
