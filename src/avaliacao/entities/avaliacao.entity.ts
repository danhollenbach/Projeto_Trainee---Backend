import { Avaliacao } from '@prisma/client';

export class AvaliacaoEntity implements Avaliacao {
  id: number;
  userId: number;
  professorId: number;
  disciplinaId: number;
  conteudo: string;
  createdAt: Date;
  uptadeAt: Date;
}
