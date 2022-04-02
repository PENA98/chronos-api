import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  username: string;

  @Field()
  email: string;
}
