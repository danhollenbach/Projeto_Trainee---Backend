import { IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsString({message: ' usuário tem que ser uma string '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    user: string;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    avaliacao: string;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    conteudo: string;
    
}