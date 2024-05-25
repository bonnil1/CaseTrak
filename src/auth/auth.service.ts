import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt'
import { LogInDto } from './dto/login.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private usersService: UsersService, 
        private jwtService: JwtService
    ) {}

    async logIn(logInDto: LogInDto): Promise<{ access_token: string }> {
        const { username, password } = logInDto
        const user = await this.userModel.findOne({username});

        if(!user) {
            throw new UnauthorizedException('Invalid email or password.');
        }
    
        const verifyPassword = await bcrypt.compare(password, user.password);
        console.log(password)
        console.log(user.password)

        if (!verifyPassword) {
            throw new UnauthorizedException('Invalid password');
        }
    
        const payload = { username: user.username }; //mess with the _id and payload more
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
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
