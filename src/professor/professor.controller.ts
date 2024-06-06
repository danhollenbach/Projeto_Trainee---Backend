import { Controller, Get, Post, Param, ValidationPipe, Body, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';


@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  create(@Body(ValidationPipe) professorData: CreateProfessorDto){
    return this.professorService.create(professorData);
  }

  @Get()
  async findAll() {
    return await this.professorService.findAll();
  }

  @Get(':id')
  async findProfessor(@Param('id', ParseIntPipe) id: number) {
    return await this.professorService.findProfessor(id);
  }
  @Delete(':id')
  async deleteProfessor(@Param('id', ParseIntPipe) id: number) {
    return await this.professorService.deleteProfessor(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: UpdateProfessorDto) {
    return await this.professorService.update(id, data);
  }
}
