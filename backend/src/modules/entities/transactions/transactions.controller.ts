import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  HttpCode,
  Query,
  ParseIntPipe,
} from "@nestjs/common";

import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { ActiveUserId } from "src/shared/decorators/activeUserId";
import { OptionalParseUUIDPipe } from "src/shared/pipes/OptionalParseUUIDPipe";
import { TransactionType } from "./entities/Transaction";
import { OptionalParseEnumPipe } from "src/shared/pipes/OptionaParseENUMPipe";

@Controller("transactions")
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(userId, createTransactionDto);
  }

  @Get()
  findAll(
    @ActiveUserId() userId: string,
    @Query("month", ParseIntPipe) month: number,
    @Query("year", ParseIntPipe) year: number,
    @Query("bankAccountId", OptionalParseUUIDPipe) bankAccountId?: string,
    @Query("type", new OptionalParseEnumPipe(TransactionType))
    type?: TransactionType,
  ) {
    return this.transactionsService.findAllByUserId(userId, {
      month,
      year,
      bankAccountId,
      type,
    });
  }

  @Put(":transactionId")
  update(
    @ActiveUserId() userId: string,
    @Param("transactionId", ParseUUIDPipe) transactionId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(
      userId,
      transactionId,
      updateTransactionDto,
    );
  }

  @Delete(":transactionId")
  @HttpCode(204)
  remove(
    @ActiveUserId() userId: string,
    @Param("transactionId", ParseUUIDPipe) transactionId: string,
  ) {
    return this.transactionsService.remove(userId, transactionId);
  }
}
