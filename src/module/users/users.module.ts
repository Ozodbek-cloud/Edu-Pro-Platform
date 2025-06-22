import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/common/models/user.models';
import { JwtRefresh } from 'src/common/jwt/jwt.refesh.module';
import { JwtAccess } from 'src/common/jwt/jwt.access.module';
import { MailService } from 'src/common/mail/mail.service';
import { MailModule } from 'src/common/mail/mail.module';

@Module({
  imports: [SequelizeModule.forFeature([Users]),
  JwtRefresh, JwtAccess, MailModule],
  providers: [UsersService],
  controllers: [UsersController]
})

export class UsersModule {}
