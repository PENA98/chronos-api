import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserSchema, User } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]) ],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UsersModule {}
