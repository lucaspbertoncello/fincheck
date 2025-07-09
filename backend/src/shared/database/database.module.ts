import { Global, Module } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.service";
import { UsersRepository } from "src/shared/database/repositories/users.repositories";
import { CategoriesRepository } from "./repositories/categories.repositories";
import { BankAccountRepository } from "./repositories/bank-account.repositories";
import { TransactionsRepository } from "./repositories/transactions.repositories";

@Global()
@Module({
  providers: [UsersRepository, PrismaService, CategoriesRepository, BankAccountRepository, TransactionsRepository],
  exports: [UsersRepository, CategoriesRepository, BankAccountRepository, TransactionsRepository],
})
export class DatabaseModule {}
