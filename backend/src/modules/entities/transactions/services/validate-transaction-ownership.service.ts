import { Injectable, NotFoundException } from "@nestjs/common";
import { TransactionsRepository } from "src/shared/database/repositories/transactions.repositories";

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(private readonly transactionsRepo: TransactionsRepository) {}

  async validate(userId: string, transactionId: string): Promise<boolean> {
    const isOwner = await this.transactionsRepo.findFirst({
      where: { userId, id: transactionId },
    });

    if (!isOwner) {
      throw new NotFoundException("Transaction not found");
    }

    return true;
  }
}
