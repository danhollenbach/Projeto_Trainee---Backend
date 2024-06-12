import {
  Controller,
  Get,
  Post,
  Param,
  ValidationPipe,
  Body,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Public } from '../auth/decorators/IsPublic.decorador';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto) {
    return await this.avaliacaoService.create(avaliacaoData);
  }

  @Public()
  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }

  //método auxiliar para o frontend
  @Get(':id')
  async findAllByProfessor(@Param('professorId', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAllByProfessor(id);
  }

  @Get(':id')
  async findAllByUsers(@Param('UsersId', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAllByProfessor(id);
  }

  @Get(':id')
  async findAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAvaliacao(id);
  }
  @Delete(':id')
  async deleteAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.deleteAvaliacao(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.update(id, data);
  }
}
