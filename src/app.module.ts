import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/config/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './module/users/users.module';
import { LessonModule } from './module/lesson/lesson.module';
import { CourseModule } from './module/course/course.module';
import { MailModule } from './common/mail/mail.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    LessonModule,
    CourseModule,
    MailModule,],

})
export class AppModule {}
