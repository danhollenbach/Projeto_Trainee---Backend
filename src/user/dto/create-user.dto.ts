import { IsString, MinLength, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class CreateUserDto {
    @IsString({message: ' usuário tem que ser uma string '})
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    username: string;
    @IsEmail()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    email: string;  
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '}) 
    name: string;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    @MinLength(6)
    password: string;
    @IsString()
    @IsOptional()
    departamento?: string;
    @IsString()
    curso: string;
    @IsString()
    profilephoto: string;
    
}