import { Column, DataType, ForeignKey, HasMany, Model, Table, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { Lessons } from './lesson.model';
import { DataTypes } from 'sequelize';
import { Users } from './user.models';

@Table({ tableName: 'Courses' })
export class Courses extends Model {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  course_id: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  thumbnail: string;

  @Column
  price: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER })
  instructorId: number;

  @BelongsTo(() => Users)
  instructor: Users;

  @HasMany(() => Lessons)
  lessons: Lessons;

  @Column({ 
    type: DataType.BOOLEAN,
    defaultValue: false 
})
  isApproved: boolean;
}
