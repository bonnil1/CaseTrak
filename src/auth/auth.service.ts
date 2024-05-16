import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private usersService: UsersService, 
        private jwtService: JwtService
    ) {}

    async logIn(_id: string, username: string, password: string): Promise<{ access_token: string }> {
        const user = await this.usersService.getUser(username);
    
        if (!user || user.password !== password) {
            throw new UnauthorizedException();
        }
    
        const payload = { sub: _id, username: user.username }; //mess with the _id and payload more
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);

        return createdUser.save();
    }

}

/*
async logIn(username: string, password: string): Promise< {access_token: string}> {
        const user = await this.usersService.findUser(username);

        if (user && user.password === password) {
            const {password, username, ...rest} = user;
            return rest;
        }

        return null;
    }
    //diff from doc
    async login(user: any) {
        const payload = {name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
*/
