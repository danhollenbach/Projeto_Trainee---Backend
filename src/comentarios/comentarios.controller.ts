import { Controller, Get, Post, Param, ValidationPipe, Body, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';


@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  async create(@Body(ValidationPipe) comentariosData: CreateComentariosDto){
    return await this.comentariosService.create(comentariosData);
  }

  @Get()
  async findAll() {
    return await this.comentariosService.findAll();
  }

  @Get(':id')
  async findComentarios(@Param('id', ParseIntPipe) id: number) {
    return await this.comentariosService.findComentarios(id);
  }
  @Delete(':id')
  async deleteComentarios(@Param('id', ParseIntPipe) id: number) {
    return await this.comentariosService.deleteComentarios(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: UpdateComentariosDto) {
    return await this.comentariosService.update(id, data);
  }
}
