import { Professor } from '@prisma/client';

export class ProfessorEntity implements Professor {
  id: number;
  name: string;
  foto: string;
  departamento: string;
  createdAt: Date;
  updateAt: Date;
  disciplinaId: number;
}