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

  async findAllByUserId(userId: string) {
    const bankAccounts = await this.bankAccountRepo.findMany({
      where: { userId },
      include: { transactions: { select: { type: true, value: true } } },
    });

    return bankAccounts.map((bankAccount) => {
      const totalTransactions = bankAccount.transactions.reduce(
        (acc, transaction) =>
          transaction.type === "INCOME"
            ? acc + transaction.value
            : acc - transaction.value,
        0,
      );

      const currentBalance = bankAccount.initialBalance + totalTransactions;

      return {
        ...bankAccount,
        currentBalance,
      };
    });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      bankAccountId,
    );

    return this.bankAccountRepo.update({
      where: { id: bankAccountId },
      data: { ...updateBankAccountDto },
    });
  }

  async delete(userId: string, bankAccountId: string) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      bankAccountId,
    );
    await this.bankAccountRepo.delete({ where: { id: bankAccountId } });
    return null;
  }
}
