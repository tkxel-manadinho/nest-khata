import { IsIn, IsNumber, IsString } from 'class-validator';

export class TransactionDto {
  @IsNumber()
  customer_id: number;

  @IsString()
  @IsIn(['debit', 'credit'])
  type: string;

  @IsNumber()
  amount: number;
}
