import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(username: string, password: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username
      },
    });

    if (!user) {
        throw new UnauthorizedException('Invalid credentials')
    }

    const passwordIsTrue = await compare(password, user.password)

    if (!passwordIsTrue) {
        throw new UnauthorizedException('Invalid credentials')
    }
  }
}

