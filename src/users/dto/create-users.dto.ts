import { PickType } from '@nestjs/mapped-types';
import { UsersEntity } from '../entities/users.entity';

export class CreateUsersDto extends PickType(UsersEntity, [
  'username',
  'email',
  'name',
  'password',
  'departamento',
  'curso',
  'profilephoto',
  'updadteAt',
]) {}
