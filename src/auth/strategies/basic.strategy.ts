import * as BasicHttp from 'passport-http'
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { z } from 'zod';



@Injectable()
export class BasicStrategy extends PassportStrategy(BasicHttp.BasicStrategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    return await this.authService.validateUser(username, password)
  }
}