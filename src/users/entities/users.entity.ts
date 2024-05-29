import { Users } from '@prisma/client';

export class UsersEntity implements Users {
  id: number;
  username: string;
  email: string;
  name: string;
  password: string;
  departamento: string;
  curso: string;
  profilephoto: string;
  createdAt: Date;
  updadteAt: Date;
}
