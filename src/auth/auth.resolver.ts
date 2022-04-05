import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginUserInput } from './dto/loginUser.input';
import { GqlAuthGuard } from './gql-authguard';
import { SignupUserInput } from './dto/signupUser.input';

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService
    ) {}

    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard)
    login(@Args('LoginUserInput') loginUserInput: LoginUserInput, @Context() context){
        return this.authService.login(context.user);
    }

    @Mutation(() => User)
    signup(@Args('signupUserInput') signupUserInput: SignupUserInput){
        return this.authService.signup(signupUserInput);
    }

}
