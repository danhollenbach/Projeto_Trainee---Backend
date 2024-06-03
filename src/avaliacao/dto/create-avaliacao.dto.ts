import { IsString, IsNotEmpty, IsInt } from "class-validator";
export class CreateAvaliacaoDto {
    @IsInt({message: ' o id tem que ser numero '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    userId: number; 
    @IsInt({message: 'tem que ser numero'})
    @IsNotEmpty({message: 'nao pode estar vazio '})
    professorId: number;
    @IsInt({message: 'tem que ser numero'})
    @IsNotEmpty({message: 'nao pode estar vazio '})
    disciplinaId: number;
    @IsString({message: ' tem que ser texto '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    conteudo: string;   
}