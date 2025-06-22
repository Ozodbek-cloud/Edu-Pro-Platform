import { DataTypes } from "sequelize";
import { Table, Column,  Model, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Courses } from "./courses.model";

@Table({tableName: "Lessons"})
export class Lessons extends Model{
    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    lesson_id: number

    @ForeignKey(() => Courses)
    @Column
    course_id: number

    @BelongsTo(() => Courses)
    course: Courses
    @Column
    title: string

    @Column
    video_url: string
     
    
}