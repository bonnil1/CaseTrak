import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async getUser(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();

        if(!user) {
            throw new Error('No user found.')
        }

        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        
        const salt = await bcrypt.genSalt(10);
        const password = createUserDto.password;
        console.log(password)
        const hashed = await bcrypt.hash(password, salt);
        console.log(hashed)

        const newUser = new this.userModel({
            username: createUserDto.username,
            password: hashed,
            email: createUserDto.email,
            unit: createUserDto.unit
        })

        return newUser.save();
    }

}
