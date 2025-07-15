import { Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { TransactionsRepository } from "src/shared/database/repositories/transactions.repositories";
import { ValidateBankAccountOwnershipService } from "../bank-accounts/services/validate-bank-account.service";
import { ValidateCategoryOwnershipService } from "../categories/services/validate-category-ownership.service";
import { ValidateTransactionOwnershipService } from "./services/validate-transaction-ownership.service";
import { TransactionType } from "./entities/Transaction";

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepo: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: ValidateTransactionOwnershipService,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, name, value, date, type } =
      createTransactionDto;

    await this.validateEntitiesOwnership(userId, categoryId, bankAccountId);

    return this.transactionsRepo.create({
      data: { name, value, date, type, categoryId, bankAccountId, userId },
    });
  }

  findAllByUserId(
    userId: string,
    filters: {
      month: number;
      year: number;
      bankAccountId?: string;
      type?: TransactionType;
    },
  ) {
    return this.transactionsRepo.findMany({
      where: {
        userId,
        bankAccountId: filters?.bankAccountId,
        type: filters?.type,
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month)),
          lt: new Date(Date.UTC(filters.year, filters.month + 1)),
        },
      },
    });
  }

  async update(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const { bankAccountId, categoryId } = updateTransactionDto;

    await this.validateEntitiesOwnership(
      userId,
      categoryId,
      bankAccountId,
      transactionId,
    );

    return this.transactionsRepo.update({
      where: { id: transactionId },
      data: { ...updateTransactionDto },
    });
  }

  async remove(userId: string, transactionId: string) {
    await this.validateTransactionOwnershipService.validate(
      userId,
      transactionId,
    );
    await this.transactionsRepo.delete({ where: { id: transactionId } });
    return null;
  }

  private async validateEntitiesOwnership(
    userId: string,
    categoryId: string | undefined,
    bankAccountId: string,
    transactionId?: string,
  ) {
    await Promise.all([
      this.validateBankAccountOwnershipService.validate(userId, bankAccountId),
      this.validateCategoryOwnershipService.validate(userId, categoryId),
      transactionId &&
        this.validateTransactionOwnershipService.validate(
          userId,
          transactionId,
        ),
    ]);
  }
}
