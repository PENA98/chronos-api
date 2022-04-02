import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginUserInput } from './dto/loginUser.input';
import { GqlAuthGuard } from './gql-authguard';

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService
    ) {}

    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard)
    login(@Args('LoginUserInput') loginUserInput: LoginUserInput){
        return this.authService.login(loginUserInput);
    }
}
