import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './professor/professor.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { DisciplinaModule } from './disciplina/disciplina.module';

@Module({
  imports: [
    ProfessorModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    AvaliacaoModule,
    DisciplinaModule,
    ComentariosModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
