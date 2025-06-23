import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './CourseDto/course.dto';
import { Auth } from 'src/global/decorator/user.decorator';
import { UserRole } from 'src/global/types/user.types';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Auth(UserRole.INSTUCTOR, UserRole.ADMIN)
    @Post('create')
    AddCourse(@Body() payload: CourseDto) {
       return this.courseService.create_course(payload)
    }

    @Auth(UserRole.INSTUCTOR, UserRole.ADMIN)
    @Get('all')
    All() {
        return this.courseService.get_all()
    }

    @Auth(UserRole.INSTUCTOR, UserRole.ADMIN)
    @Get(':id')
    One_Course(@Param("id") id: number) {
        return this.courseService.get_one(id)
    }

    @Auth(UserRole.INSTUCTOR, UserRole.ADMIN)
    @Delete('delete_one/:id')
    Delete_One(@Param("id") id: number) {
        return this.courseService.delete_one(id)
    }

    @Auth(UserRole.INSTUCTOR, UserRole.ADMIN)
    @Patch("change/:id")
    ChangeCourse(@Param('id') id: number,  @Body() payload: Partial<CourseDto>) {
        return this.courseService.change(id, payload)
    }
}
