import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService, PrismaService],
})
export class ComentariosModule {}
