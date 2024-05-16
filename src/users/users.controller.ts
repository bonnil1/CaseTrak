import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    getUser(@Param('id') id: string) {
        try {
            return this.usersService.getUser(id)
        } catch (err) {
            throw new NotFoundException();
        }
    }

}
