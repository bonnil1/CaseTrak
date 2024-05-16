import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getUser(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();

        if(!user) {
            throw new Error('No user found.')
        }

        return user;
    }

}
