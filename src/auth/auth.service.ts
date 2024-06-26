import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { UsersToken } from './token/usersToken';
import * as bcrypt from 'bcrypt';
import { UsersPayload } from './token/usersPayloads';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginRequestBody: LoginRequestBody): Promise<UsersToken> {
    const users = await this.validateUser(
      loginRequestBody.email,
      loginRequestBody.password,
    );

    if (!users) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }

    const payload: UsersPayload = { email: users.email, sub: users.id };

    const jwtToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
      secret: this.configService.get('JWT_SECRET'),
    });

    return {
      acess_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const users = await this.userService.findByEmail(email);

    if (users) {
      const isPasswordValid = await bcrypt.compare(password, users.password);
      if (isPasswordValid) {
        return {
          ...users,
          password: undefined,
        };
      }
    }

    return null;
  }
}
