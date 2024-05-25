import { Controller, Get, Body, Query, Post, Request, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from './jwt-auth.guard'
import { AuthService } from './auth.service';
import { LogInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() logInDto: LogInDto): Promise<{ access_token: string }> {
        return this.authService.logIn(logInDto);
    }

    @UseGuards(AuthGuard)
    @Get('home')
    getHome(@Request() req) { //do i need to request here?
        return req.user;
    }
}
