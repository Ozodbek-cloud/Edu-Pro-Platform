import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lessons } from 'src/common/models/lesson.model';
import { LessonDto } from './LessonDto/lessons.dto';

@Injectable()
export class LessonService {
    constructor(@InjectModel(Lessons) private lessonModel: typeof Lessons) {}

    async create_lesson(payload: Required<LessonDto>) {
        let newLesson = await this.lessonModel.create(payload)

        return newLesson
    }
}
