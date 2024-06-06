import { IsOptional } from 'class-validator';

export class UpdateProfessorDto {
  @IsOptional()
  name: string;
  @IsOptional()
  departamento: string;
}
