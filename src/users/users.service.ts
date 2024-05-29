import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type UsersModel = Prisma.UsersDelegate<RejectOptions>;
const { defaultOptions, getCrud } = new CrudOptions<UsersModel>().setOptions(
  {},
);

@Injectable()
export class UsersService extends getCrud<
  Prisma.UsersGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.users, defaultOptions);
  }
}
