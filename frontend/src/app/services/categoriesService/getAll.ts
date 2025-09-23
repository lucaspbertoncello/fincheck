import type { Category } from "../../entities/Category";
import { httpClient } from "../httpClient";

export async function getAll() {
  const { data } = await httpClient.get<Category[]>("/categories");
  return data;
}
