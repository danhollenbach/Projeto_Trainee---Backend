import { IsNumber, IsString, MinLength, IsEmail, IsNotEmpty } from "class-validator";
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
    @IsNumber()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    age: number;
    @IsString()
    @IsNotEmpty({message: ' o parametro nao pode ser vazio '})
    @MinLength(6)
    password: string;
    
}