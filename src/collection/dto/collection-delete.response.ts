import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { Collection } from '../collection.schema';

@InputType()
export class deleteCollectionResponse extends PartialType(Collection) {
  @Field(() => ID)
  _id: string;
}
