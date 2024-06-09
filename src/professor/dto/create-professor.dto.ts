import { IsString, IsNotEmpty } from "class-validator";
export class CreateProfessorDto {
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    name: string
    @IsString({message: ' usuário tem que ser uma string '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    departamento: string
    disciplinaId: number
}