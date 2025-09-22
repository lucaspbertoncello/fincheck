import { create } from "./create";
import { deleteAccount } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

export const bankAccountsService = {
  create,
  update,
  delete: deleteAccount,
  getAll,
};
