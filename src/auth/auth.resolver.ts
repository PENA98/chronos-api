import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginUserInput } from './dto/loginUser.input';

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService
    ) {}

    @Mutation(() => LoginResponse)
    async login(@Args('LoginUserInput') loginUserInput: LoginUserInput): Promise<LoginResponse> {
        return this.authService.login(loginUserInput);
    }
}
