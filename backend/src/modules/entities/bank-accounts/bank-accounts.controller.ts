import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from "@nestjs/common";

import { BankAccountsService } from "./bank-accounts.service";
import { CreateBankAccountDto } from "./dto/create-bank-account.dto";
import { ActiveUserId } from "src/shared/decorators/activeUserId";
import { UpdateBankAccountDto } from "./dto/update-bank-account.dto";

@Controller("bank-accounts")
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createBankAccountDto: CreateBankAccountDto,
  ) {
    return this.bankAccountsService.create(userId, createBankAccountDto);
  }

  @Get()
  findAllByUserId(@ActiveUserId() userId: string) {
    return this.bankAccountsService.findAllByUserId(userId);
  }

  @Put(":bankAccountId")
  update(
    @ActiveUserId() userId: string,
    @Param("bankAccountId", ParseUUIDPipe) bankAccountId: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountsService.update(
      userId,
      bankAccountId,
      updateBankAccountDto,
    );
  }

  @Delete(":bankAccountId")
  @HttpCode(204)
  delete(
    @ActiveUserId() userId: string,
    @Param("bankAccountId", ParseUUIDPipe) bankAccountId: string,
  ) {
    return this.bankAccountsService.delete(userId, bankAccountId);
  }
}
