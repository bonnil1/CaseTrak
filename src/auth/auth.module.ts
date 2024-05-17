import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema} from '../schemas/user.schema';

@Module({
  imports: [
    UsersModule, 
    JwtModule.register({
    secret: process.env.SECRET,
    signOptions: {expiresIn: '60s'}
    }),
    MongooseModule.forFeature([{
      name: User.name, 
      schema: UserSchema
    }])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
