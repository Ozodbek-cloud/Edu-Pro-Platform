import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LessonDto{
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    course_id: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    video_url: string
}