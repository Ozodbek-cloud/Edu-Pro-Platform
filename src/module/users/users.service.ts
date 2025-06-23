import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/common/models/user.models';
import { RegisterDto } from './UserDto/register.dto';
import * as bcrypt from "bcrypt"
import { LoginDto } from './UserDto/login.dto';
import { MailService } from 'src/common/mail/mail.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userModel: typeof Users, private jwtService: JwtService, private mailerService: MailService) {}

    private async generateToken(payload: object) {
        return {
            accessToken: await this.jwtService.signAsync(payload),
            refreshToken: await this.jwtService.signAsync(payload)
        }
    }

    async register(payload: Required<RegisterDto>) {
        // let exists = await this.userModel.findOne({
        //     where: {
        //         username: payload.username
        //     }
        // })

        // if (exists) throw new ConflictException(`this ${payload.username} is already exists`)
        
        // let email_exists = await this.userModel.findOne({
        //     where: {
        //         email: payload.email
        //     }
        // })

        // if (email_exists) throw new ConflictException(`this ${payload.email} is already exists`)
        let hash = await bcrypt.hash(payload.password, 10)
        
        let data = await this.userModel.create({...payload, password: hash})
        let code  = Math.floor((Math.random() * 10000) + 10000)
                    
        await this.mailerService.verification(payload.email, 'Verification', code)

        await this.userModel.update({ verfyCode: code }, { where: { email: payload.email } })

        let token = await this.generateToken({userId: data.dataValues.user_id, role: data.dataValues.role})

        return  {token}

    }
    async login(payload: Required<LoginDto>) {
        let exists = await this.userModel.findOne({
            where: {
                email: payload.email
            }
        })
        if (!exists) throw new BadRequestException(`this ${payload.email} is not found`)
        
        if (payload.verfyCode !== exists.dataValues.verfyCode) throw new BadRequestException(`this ${payload.verfyCode} is Incorrect`)
        
        return await this.generateToken({userId: exists.dataValues.user_id, role: exists.dataValues.role})

    }
}
