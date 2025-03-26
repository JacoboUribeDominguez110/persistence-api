import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OffersModule } from './offers/offers.module';
import { OffersController } from './offers/offers.controller';
import { AuthModule } from './auth/auth.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [PrismaModule, OffersModule, AuthModule, ContractsModule],
  controllers: [AppController, OffersController],
  providers: [AppService],
})
export class AppModule {}
