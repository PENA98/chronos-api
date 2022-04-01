import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { Collection } from '../collection/collection.schema';

export type CollectionItemDocument = mongoose.Document & CollectionItem;
@Schema()
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
  price: number;

  @Prop({ required: true })
  @Field()
  condition: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Collection.name })
  @Field()
  collectionId: string;

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
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  price: number;

  @Field()
  condition: string;

  @Field()
  collectionId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
