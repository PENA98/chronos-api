import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { Collection } from '../collection/collection.schema';

export type CollectionItemDocument = mongoose.Document & CollectionItem;
@Schema( )
@ObjectType()
export class CollectionItem {
  @Field(() => ID)
  _id: string;

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
  price: string;

  @Prop({ required: true })
  @Field()
  condition: string;

  @Prop( { required: true })
  @Field()
  collectionID: string;

  @Prop()
  @Field()
  createdAt: Date;

  @Prop({ required: true })
  @Field()
  updatedAt: Date;
}

export const CollectionItemSchema =
  SchemaFactory.createForClass(CollectionItem);

@InputType()
export class createCollectionItemInput {

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  price: string;

  @Field()
  condition: string;

  @Field()
  collectionID: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class updateCollectionItemInput {

  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  price: string;

  @Field()
  condition: string;

  @Field()
  collectionID: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

