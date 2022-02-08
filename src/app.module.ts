import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions/entities/transaction.entity';

@Module({
  imports: [
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nest-challenge',
      entities: [Transaction],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
