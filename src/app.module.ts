import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './cusomers/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database-config';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
