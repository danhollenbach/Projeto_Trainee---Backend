import { IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsString({message: ' o autor tem que ser uma string '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    autor: string;  
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    conteudo: string;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    professor: string;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    disciplina: string;
    
}