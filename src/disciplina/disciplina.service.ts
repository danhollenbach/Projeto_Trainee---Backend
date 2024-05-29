import { Injectable } from '@nestjs/common';
import { CrudOptions, RejectOptions } from '@cjr-unb/super-crud';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type DisciplinaModel = Prisma.DisciplinaDelegate<RejectOptions>;
const { defaultOptions, getCrud } =
  new CrudOptions<DisciplinaModel>().setOptions({});

@Injectable()
export class DisciplinaService extends getCrud<
  Prisma.DisciplinaGetPayload<typeof defaultOptions>
>() {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma.disciplina, defaultOptions);
  }
}
