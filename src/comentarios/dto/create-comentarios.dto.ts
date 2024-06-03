import { IsString, IsNotEmpty, IsInt } from "class-validator";
export class CreateComentariosDto {
    @IsInt({message: ' usuário tem que ser uma numero '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    userId: number;
    @IsInt({message: 'tem que ser numero'})
    @IsNotEmpty({message: 'nao pode estar vazio'})
    avaliacaoId: number;
    @IsString({message: ' tem que ser texto '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    conteudo: string;
}