import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthController } from './controllers/authenticate.controller';


@Module({
  imports: [],
  controllers: [AuthController],
  providers: [PrismaService],
})
export class AppModule {}
