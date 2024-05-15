import { Controller, Get, Post, Param, NotFoundException, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
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
