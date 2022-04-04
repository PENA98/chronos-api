import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import mongoose from 'mongoose';

export type CollectionDocument = mongoose.Document & Collection;

@Schema()
@ObjectType()
export class Collection {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  userID: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  description: string;

  @Prop({ required: true })
  @Field()
  image: string;

  @Prop({ required: true })
  @Field()
  createdAt: Date;

  @Prop({ required: true })
  @Field()
  updatedAt: Date;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

@InputType()
export class createCollectionInput {
  @Field()
  userID: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class updateCollectionInput {
  @Field()
  _id: string;
  
  @Field()
  userID: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

