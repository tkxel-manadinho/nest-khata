import { Body, Controller, Post } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('/')
  create(@Body() body: TransactionDto) {
    return this.transactionService.create(body);
  }
}
