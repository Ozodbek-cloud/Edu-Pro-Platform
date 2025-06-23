import { Body, Controller, Post } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonDto } from './LessonDto/lessons.dto';
import { Auth } from 'src/global/decorator/user.decorator';
import { UserRole } from 'src/global/types/user.types';

@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService: LessonService) {}

    @Auth(UserRole.ADMIN, UserRole.INSTUCTOR)
    @Post('create')
    CreateLesson(@Body() payload: LessonDto) {
        return this.lessonService.create_lesson(payload)
    }
}
