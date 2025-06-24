import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonDto } from './LessonDto/lessons.dto';
import { UserRole } from 'src/global/types/user.types';
import { Roles } from 'src/global/decorator/roles.decorator';
import { RolesGuard } from 'src/global/guards/roles.guard';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';

@UseGuards(RolesGuard, AuthGuard)
@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService: LessonService) {}

    @Roles(UserRole.INSTUCTOR)
    @Post('create')
    CreateLesson(@Body() payload: LessonDto) {
        return this.lessonService.create_lesson(payload)
    }
}
