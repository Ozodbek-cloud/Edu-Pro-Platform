import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CourseDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    thumbnail: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    instructorId: number

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    isApproved: boolean
}