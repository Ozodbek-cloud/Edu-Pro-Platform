import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Courses } from 'src/common/models/courses.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessToken } from 'src/common/utils/jwt.utils';

@Module({
  imports: [SequelizeModule.forFeature([Courses]),
      JwtModule.register(JwtAccessToken),],
  providers: [CourseService],
  controllers: [CourseController]
})

export class CourseModule {}
