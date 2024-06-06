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
import { ComentariosService } from './comentarios.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  async create(@Body(ValidationPipe) comentariosData: CreateComentariosDto) {
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateComentariosDto,
  ) {
    return await this.comentariosService.update(id, data);
  }
}

// import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
// import { ComentariosService } from './comentarios.service';
// import { CreateComentariosDto } from './dto/create-comentarios.dto';
// import { UpdateComentariosDto } from './dto/update-comentarios.dto';
// import { CurrentUser } from '../auth/decorators/CurrentUser.decorador';
// import { UsersPayload } from '../auth/token/usersPayloads';

// @Controller('Comentarios')
// export class ComentariosController {
//   constructor(private readonly ComentariosService: ComentariosService) {}

//   @Post()
//   async create(@Body() createComentariosDto: CreateComentariosDto, @CurrentUser() currentUser: UsersPayload) {
//     if (createComentariosDto.userId !== currentUser.sub) {
//       throw new UnauthorizedException('Só é possível criar Comentarioss para si mesmo');
//     }
//     return this.ComentariosService.create(createComentariosDto);
//   }

//   @Get()
//   async findAll() {
//     return this.ComentariosService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.ComentariosService.findOne(id);
//   }

//   @Patch(':id')
//   async update(@Param('id') id: string, @Body() updateComentariosDto: UpdateComentariosDto, @CurrentUser() currentUser: UserPayload) {
//     const Comentarios = await this.ComentariosService.findOne(id);
//     if (Comentarios.authorId !== currentUser.sub) {
//       throw new UnauthorizedException('Você só pode atualizar seus próprios Comentarioss');
//     }
//     return this.ComentariosService.update(id, updateComentariosDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id') id: string, @CurrentUser() currentUser: UserPayload) {
//     const Comentarios = await this.ComentariosService.findOne(id);
//     if (Comentarios.authorId !== currentUser.sub) {
//       throw new UnauthorizedException('Você só pode deletar seus próprios Comentarioss');
//     }
//     return this.ComentariosService.remove(id);
//   }
// }
