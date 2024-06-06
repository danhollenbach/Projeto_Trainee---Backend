import {
  Controller,
  HttpStatus,
  Post,
  HttpCode,
  Body,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { AuthGuard } from './guards/auth-guards';
import { Public } from '../auth/decorators/IsPublic.decorador';

@Controller()
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() LoginRequestBody: LoginRequestBody) {
    return this.authservice.login(LoginRequestBody);
  }

  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
