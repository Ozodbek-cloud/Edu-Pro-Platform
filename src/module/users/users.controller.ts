import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './UserDto/register.dto';
import { ApiProperty } from '@nestjs/swagger';
import { LoginDto } from './UserDto/login.dto';
import { VerificationDto } from './UserDto/Verufrycation.dto';
import { sendVerifyDto } from './UserDto/SendVeryDto';
import { resetPasswordDto } from './UserDto/ResetPassword.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiProperty()
    @Post('register')
    Register(@Body() payload: RegisterDto) {
       return this.userService.register(payload)
    }

    @ApiProperty()
    @Post('verify')
    Verify(@Body() payload: VerificationDto) {
       return this.userService.verify(payload)
    }
    
    @ApiProperty()
    @Post('send-verify')
    SendVerify(@Body() payload: sendVerifyDto) {
       return this.userService.sendVerify(payload)
    }

    @ApiProperty()
    @Post('reset-password')
    Reset_Pass(@Body() payload: resetPasswordDto) {
       return this.userService.reset_password(payload)
    }
}
