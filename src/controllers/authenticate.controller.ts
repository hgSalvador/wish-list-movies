import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { BasicAuthGuard } from 'src/auth/guards/basic-auth.guard';

@Controller('movies')
export class AuthController {
  @UseGuards(BasicAuthGuard)
  @Get()
  getProtectedRoute(@Request() req) {
    return { message: `Welcome, ${req.user.username}!` };
  }
}