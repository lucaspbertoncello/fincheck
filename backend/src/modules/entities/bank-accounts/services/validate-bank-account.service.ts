import { Injectable, NotFoundException } from "@nestjs/common";
import { BankAccountRepository } from "src/shared/database/repositories/bank-account.repositories";

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepo: BankAccountRepository) {}

  async validate(userId: string, bankAccountId: string): Promise<boolean | null> {
    if (!bankAccountId) {
      return null;
    }

    const isOwner = await this.bankAccountRepo.findFirst({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException("Bank Account not found");
    }

    return true;
  }
}
