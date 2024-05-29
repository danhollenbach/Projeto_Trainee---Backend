import { IsString } from "class-validator";
export class UpdateComentariosDto {
    @IsString() 
    avaliacao: string;
    @IsString({message: ' usuário tem que ser uma string '})
    conteudo: string;
       
}