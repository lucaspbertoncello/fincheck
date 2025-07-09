import { Module } from "@nestjs/common";

import { APP_GUARD } from "@nestjs/core";

import { UsersModule } from "./modules/entities/users/users.module";
import { DatabaseModule } from "./shared/database/database.module";
import { AuthModule } from "./modules/features/auth/auth.module";
import { AuthGuard } from "./modules/features/auth/auth.guard";
import { CategoriesModule } from "./modules/entities/categories/categories.module";
import { BankAccountsModule } from "./modules/entities/bank-accounts/bank-accounts.module";
import { TransactionsModule } from "./modules/entities/transactions/transactions.module";

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, CategoriesModule, BankAccountsModule, TransactionsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
