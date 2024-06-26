import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaService();

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUsersDto: CreateUsersDto) {
    const existingUsers = await this.prismaService.users.findUnique({
      where: { email: createUsersDto.email },
    });

    if (existingUsers) {
      throw new ConflictException('Email ja cadastrado');
    }

    const existingUsername = await this.prismaService.users.findUnique({
      where: { username: createUsersDto.username },
    });

    if (existingUsername) {
      throw new ConflictException('username ja cadastrado');
    }

    const hashedpassword = await bcrypt.hashSync(createUsersDto.password, 10);

    return await this.prismaService.users.create({
      data: { ...createUsersDto, password: hashedpassword },
    });
  }
  async findAll() {
    return await this.prismaService.users.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        curso: true,
        coments: true,
        createdAt: true,
        updadteAt: true,
      },
    });
  }
  async findOne(id: number) {
    const isValidId = await this.prismaService.users.findUnique({
      where: { id },
    });
    if (!isValidId) {
      throw new NotFoundException('user nao encontrado');
    }
    return await this.prismaService.users.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        curso: true,
        coments: true,
        createdAt: true,
        updadteAt: true,
      },
    });
  }

  async findByEmail(email: string) {
    const users = await this.prismaService.users.findUnique({
      where: { email },
    });
    if (!users) {
      return null;
    }
    return users;
  }

  async update(id: number, updateUsersDto: UpdateUsersDto) {
    const isValidId = await this.prismaService.users.findUnique({
      where: { id: id },
    });
    if (!isValidId) {
      throw new NotFoundException('usuario nao encontrado');
    }
    if (updateUsersDto.password) {
      const hashedpassword = await bcrypt.hashSync(updateUsersDto.password, 10);
      return await this.prismaService.users.update({
        where: { id },
        data: { ...updateUsersDto, password: hashedpassword },
        select: {
          id: true,
          username: true,
          email: true,
          curso: true,
          coments: true,
          createdAt: true,
          updadteAt: true,
        },
      });
    }

    return await this.prismaService.users.update({
      where: { id },
      data: { ...updateUsersDto },
      select: {
        id: true,
        username: true,
        email: true,
        curso: true,
        coments: true,
        createdAt: true,
        updadteAt: true,
      },
    });
  }
  async remove(id: number) {
    const isValidId = await this.prismaService.users.findUnique({
      where: { id },
    });
    if (!isValidId) {
      throw new NotFoundException('usuario nao encontrado');
    }

    return await this.prismaService.users.delete({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        curso: true,
        coments: true,
        createdAt: true,
        updadteAt: true,
      },
    });
  }
}
