import { DataTypes } from "sequelize";
import { Table, Column,  Model, HasMany } from "sequelize-typescript";
import { UserRole } from "src/global/types/user.types";
import { Courses } from "./courses.model";

@Table({tableName: "Users"})
export class Users extends Model{
    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    user_id: number

    @Column
    username: string

    @Column
    surname: string

    @Column
    email: string
    
    @Column
    password: string

    @Column({
        type: DataTypes.ENUM(...Object.values(UserRole)),
        defaultValue: UserRole.ADMIN
    })
    role: UserRole

    @HasMany(() => Courses)
    courses: Courses;

    @Column
    verfyCode: string
}