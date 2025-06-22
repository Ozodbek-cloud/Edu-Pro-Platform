import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './UserDto/register.dto';
import { ApiProperty } from '@nestjs/swagger';
import { LoginDto } from './UserDto/login.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiProperty()
    @Post('register')
    Register(@Body() payload: RegisterDto) {
       return this.userService.register(payload)
    }

    @ApiProperty()
    @Post('login')
    Login(@Body() payload: LoginDto) {
       return this.userService.login(payload)
    }
    
}
