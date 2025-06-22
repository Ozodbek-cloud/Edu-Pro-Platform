import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Courses } from 'src/common/models/courses.model';
import { CourseModule } from './course.module';

@Injectable()
export class CourseService {
    constructor(@InjectModel(Courses) private courseModel: typeof Courses) {}

    async create_course(payload: Required<CourseModule>) {
        let newCourse = await this.courseModel.create(payload)
        return newCourse
    }

    async get_all() {
        let all = await this.courseModel.findAll()
        return all
    }

    async get_one(id: number) {
        let one_course = await this.courseModel.findOne({
            where: {
                course: id
            }
        })
        return one_course
    }

    async delete_one(id: number) {
        let delete_one = await this.courseModel.destroy({
            where: {
                course_id: id
            }
        })
        return delete_one
    }
}
