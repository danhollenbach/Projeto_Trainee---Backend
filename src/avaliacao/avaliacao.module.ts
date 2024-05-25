import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';

@Module({
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService, PrismaService],
})
export class AvaliacaoModule {}