import { Controller, Get, Body, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './jwt-auth.guard'
import { AuthService } from './auth.service';
import { LogInDto } from './dto/login.dto';
import { CreateUserDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    signIn(@Body() logInDto: LogInDto) {
        return this.authService.logIn(logInDto._id, logInDto.username, logInDto.password);
    }

    @Post('signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUser(createUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('home')
    getHome(@Request() req) { //do i need to request here?
        return req.user;
    }
}
