import { IsString, IsEmail } from "class-validator";
export class UpdateUserDto {
    @IsString({message: ' usuário tem que ser uma string '})
    username: string;
    @IsEmail()
    email: string;
    @IsString() 
    name: string;
    
}