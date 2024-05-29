import { IsString, MinLength, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class CreateProfessorDto {
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    name: string;
    @IsString({message: ' usuário tem que ser uma string '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    disciplina: string; 
    @IsString()
    departamento: string;
    
}