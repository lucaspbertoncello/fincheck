import { Module } from "@nestjs/common";
import { BankAccountsService } from "./bank-accounts.service";
import { BankAccountsController } from "./bank-accounts.controller";
import { ValidateBankAccountOwnershipService } from "./services/validate-bank-account.service";

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidateBankAccountOwnershipService],
})
export class BankAccountsModule {}
