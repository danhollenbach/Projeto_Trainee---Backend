import { IsInt, IsString } from "class-validator";
export class UpdateComentariosDto {
    @IsInt({message: 'id da avaliacao ha de ser um numero'}) 
    avaliacaoId: number;
    @IsString({message: ' usuário tem que ser uma string '})
    conteudo: string;
       
}