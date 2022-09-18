import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginCommand } from 'src/Auth/dominio/command/login.command';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginCommand) {
    return await this.authService.login(body);
  }
}
