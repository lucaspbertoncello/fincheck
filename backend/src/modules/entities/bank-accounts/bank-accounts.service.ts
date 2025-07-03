import { Injectable } from "@nestjs/common";
import { CreateBankAccountDto } from "./dto/create-bank-account.dto";
import { BankAccountRepository } from "src/shared/database/repositories/bank-account.repositories";
import { UpdateBankAccountDto } from "./dto/update-bank-account.dto";
import { ValidateBankAccountOwnershipService } from "./services/validate-bank-account.service";

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountRepo: BankAccountRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.bankAccountRepo.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountRepo.findMany({ where: { userId } });
  }

  async update(userId: string, bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto) {
    await this.validateBankAccountOwnershipService.validate(userId, bankAccountId);

    return this.bankAccountRepo.update({
      where: { id: bankAccountId },
      data: { ...updateBankAccountDto },
    });
  }

  async delete(userId: string, bankAccountId: string) {
    await this.validateBankAccountOwnershipService.validate(userId, bankAccountId);
    await this.bankAccountRepo.delete({ where: { id: bankAccountId } });
    return null;
  }
}
