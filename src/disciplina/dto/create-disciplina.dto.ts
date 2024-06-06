import { IsString, IsNotEmpty, IsInt } from 'class-validator';
export class CreateDisciplinaDto {
  @IsString({ message: ' o nome da materia tem que ser uma string ' })
  @IsNotEmpty({ message: ' o parametro nao pode ser vazio ' })
  name: string;
  @IsInt({ message: 'tem que ser numero' })
  @IsNotEmpty({ message: 'nao pode estar vazio' })
  professorId: number;
}
