import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('persistence');
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();

//cross-env -e .env.development npx prisma db pull
//cross-env -e .env.development npx prisma generate