import { Controller, HttpStatus, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';

@Controller()
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() LoginRequestBody: LoginRequestBody) {
    return this.authservice.login(LoginRequestBody);
  }
}
