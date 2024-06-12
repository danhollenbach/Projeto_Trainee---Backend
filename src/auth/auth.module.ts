import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
// import { LoginValidationMiddleware } from './middleware/loginValidator';

@Module({
  imports: [UsersModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService],
})
export class AuthModule {}

// export class AuthModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoginValidationMiddleware).forRoutes('login');
//   }
// }
