import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDisciplinaDto) {
    return await this.prisma.disciplina.create({
      data: data,
    });
  }

  async findAll() {
    return await this.prisma.disciplina.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.disciplina.findUnique({
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.prisma.disciplina.delete({
      where: { id: id },
    });
  }

  async update(id: number, data: UpdateDisciplinaDto) {
    return await this.prisma.disciplina.update({
      where: { id: id },
      data: data,
    });
  }
}
