import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Collection {
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
  createdAt: Date;

  @Prop({ required: true })
  @Field()
  updatedAt: Date;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);

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
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

