import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { SignupUserInput } from './dto/signupUser.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    console.log(user);
    // const { password, ...result } = user;
    return {
      accessToken: this.jwtService.sign({
        username: user.username,
        sub: user._id,
      }),
      user: user,
    };
  }

  async signup(signupUserInput: SignupUserInput) {
    const user = await this.userService.findOne(signupUserInput.username);

    if (user) { //<-- check if user exists
      throw new Error('User already exists!');
    }

    if (signupUserInput.password !== signupUserInput.confirmPassword) { // <-- check if passwords match
      throw new Error('Passwords do not match!');
    }

    const { confirmPassword, ...verifiedUserInfo } = signupUserInput; // <-- remove confirmPassword from user object
    return this.userService.create(verifiedUserInfo);
  }
}
