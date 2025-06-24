import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './CourseDto/course.dto';
import { UserRole } from 'src/global/types/user.types';
import { RolesGuard } from 'src/global/guards/roles.guard';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Roles } from 'src/global/decorator/roles.decorator';

@UseGuards(RolesGuard, AuthGuard)
@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Roles(UserRole.INSTUCTOR)
    @Post('create')
    AddCourse(@Body() payload: CourseDto) {
       return this.courseService.create_course(payload)
    }

    @Roles(UserRole.INSTUCTOR)
    @Get('all')
    All() {
        return this.courseService.get_all()
    }

    @Roles(UserRole.INSTUCTOR)
    @Get(':id')
    One_Course(@Param("id") id: number) {
        return this.courseService.get_one(id)
    }

    @Roles(UserRole.INSTUCTOR)
    @Delete('delete_one/:id')
    Delete_One(@Param("id") id: number) {
        return this.courseService.delete_one(id)
    }

    @Roles(UserRole.INSTUCTOR)
    @Patch("change/:id")
    ChangeCourse(@Param('id') id: number,  @Body() payload: Partial<CourseDto>) {
        return this.courseService.change(id, payload)
    }
}
