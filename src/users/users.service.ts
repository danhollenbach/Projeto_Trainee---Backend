import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type UserModel = Prisma.UsersDelegate<RejectOptions>;
const {defaultOptions, getCrud} = new CrudOptions<UserModel>().setOptions({});

@Injectable()
export class UsersService extends getCrud<
  Prisma.UsersGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.users, defaultOptions);
  }
}
