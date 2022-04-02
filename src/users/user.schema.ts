//user Schema and Resolver

import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & User;

@Schema()
@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  lastname: string;

  @Prop({ required: true })
  @Field()
  username: string;

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
