

import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    nom: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;
}
