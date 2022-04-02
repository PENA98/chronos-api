import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  confirmPassword: string;

  @Field()
  email: string;
}
