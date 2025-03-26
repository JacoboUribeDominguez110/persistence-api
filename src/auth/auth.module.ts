import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from 'src/prisma/prisma.module';

import { AuthService } from './auth.service';

import { JwtStrategy } from './jwt.estrategy';

const HOURS = 24;
const DAYS = 15;
const tokenExpiration = DAYS * HOURS;
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: (tokenExpiration + 'h') },
    }),
    PrismaModule
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
