import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/signup.dto';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        try {
            return this.usersService.getUser(id)
        } catch (err) {
            throw new NotFoundException();
        }
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

}
