import { IsString, IsNotEmpty, IsInt } from "class-validator";
export class CreateComentariosDto {
    @IsString({message: ' o nome da materia tem que ser uma numero '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    name: string;
    @IsInt({message: 'tem que ser numero'})
    @IsNotEmpty({message: 'nao pode estar vazio'})
    
}