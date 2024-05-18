import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data: CreateUserDto){
        const user = await this.prisma.users.create({
            data: data, 
        });
        return user;
    }


    async findAll() {
        return await this.prisma.users.findMany();   
    }

    async findUser(id: number) { 
        return await this.prisma.users.findUnique({ 
            where: {id:id}
        })
    }

    async deleteUser(id: number) {
        return await this.prisma.users.delete({
            where: {id:id}
        })
    }

    async update(id: number, data: UpdateUserDto){
        return await this.prisma.users.update({
            where: {id:id},
            data: data,
        })
    }
}
