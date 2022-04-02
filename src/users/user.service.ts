import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { Model } from 'mongoose';
import { UpdateUserInput } from './dto/update-user.input';
import { User as UserEntity } from './entities/user.entity';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}


  create(createUserInput: CreateUserInput) {
    return this.userModel.create(createUserInput);
  }

  findAll() {
    return this.userModel.find().lean();
  }

  findOne(id: string) {
    return this.userModel.findById(id).lean();
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.updateOne({ _id: id }, updateUserInput);
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
