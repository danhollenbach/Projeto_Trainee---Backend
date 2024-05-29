import { Disciplina } from '@prisma/client';

export class DisciplinaEntity implements Disciplina {
  id: number;
  name: string;
  professorId: number;
  createdAt: Date;
  updateAt: Date;
}
