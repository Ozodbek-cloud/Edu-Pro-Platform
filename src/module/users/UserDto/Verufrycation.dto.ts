import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VerificationDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNumber()
    @IsNotEmpty()
    verifyCode: number

    @IsString()
    password: string
}