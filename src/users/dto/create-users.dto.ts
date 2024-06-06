import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateUsersDto {
  @IsString()
  @IsOptional()
  username: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsOptional()
  departamento: string;
  @IsString()
  @IsNotEmpty()
  curso: string;
  @IsString()
  @IsOptional()
  profilephoto: string;
}
