import { IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    conteudo: string;
    //@IsString()
    //@IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    //professor: string;
    //@IsString()
    //@IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    //disciplina: string;
    
}