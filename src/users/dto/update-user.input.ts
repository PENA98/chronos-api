import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
