import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { BasicAuthGuard } from 'src/auth/guards/basic-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(BasicAuthGuard)
  @Get('movies')
  getProtectedRoute(@Request() req) {
    return { message: `Welcome, ${req.user.username}!` };
  }
}