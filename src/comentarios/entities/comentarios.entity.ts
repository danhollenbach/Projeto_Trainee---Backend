import { Comentarios } from '@prisma/client';

export class ComentariosEntity implements Comentarios {
  id: number;
  userId: number;
  avaliacaoId: number;
  conteudo: string;
  createdAt: Date;
  updateAt: Date;
}
