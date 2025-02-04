import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username
      },
    });

    console.log(user)

    if (!user) {
        throw new UnauthorizedException('Invalid credentials')
    }


    const passwordIsTrue = await compare(password, user.password)

    console.log(passwordIsTrue)

    if (!passwordIsTrue) {
        throw new UnauthorizedException('Invalid credentials')
    }

    return user
  }
}

