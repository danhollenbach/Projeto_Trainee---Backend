import { Professor } from '@prisma/client';

export class ProfessorEntity implements Professor {
  id: number;
  name: string;
  departamento: string;
  createdAt: Date;
  updateAt: Date;
}
