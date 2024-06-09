import { IsString, IsNotEmpty, IsInt } from 'class-validator';
export class CreateDisciplinaDto {
  @IsString({ message: ' o nome da materia tem que ser uma string ' })
  @IsNotEmpty({ message: ' o parametro nao pode ser vazio ' })
  name: string;
}
