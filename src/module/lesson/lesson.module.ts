import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lessons } from 'src/common/models/lesson.model';

@Module({
  imports: [SequelizeModule.forFeature([Lessons])],
  controllers: [LessonController],
  providers: [LessonService]
})
export class LessonModule {}
