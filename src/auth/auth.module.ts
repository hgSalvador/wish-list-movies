import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { BasicStrategy } from './strategies/basic.strategy';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, BasicStrategy, PrismaService],

})
export class AuthModule {}