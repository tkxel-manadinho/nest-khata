import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRegistry: Repository<Transaction>,
  ) {}

  async create(body: TransactionDto) {
    if (!(await this.checkCustomerExists(body.customer_id))) {
      return {
        success: false,
        message: 'client with provided id not found',
        data: null,
      };
    }
    return body;
  }

  private async checkCustomerExists(id: number): Promise<boolean> {
    try {
      const customer = await this.transactionRegistry.findOne({
        where: { id },
      });
      return customer ? true : false;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_FIND_ERR', error);

      return false;
    }
  }
}
