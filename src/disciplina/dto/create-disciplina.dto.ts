import { PickType } from '@nestjs/mapped-types';
import { DisciplinaEntity } from '../entities/disciplina.entity';

export class CreateDisciplinaDto extends PickType(DisciplinaEntity, [
  'name',
  'professorId',
  'updateAt',
]) {
  
}
