import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { LoginUserInput } from './dto/loginUser.input';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserInput: LoginUserInput): Promise<any> {
    const user = await this.userService.findOne(loginUserInput.username);
    const { password, ...result } = user;
    return {
      access_token: 'fake-token',
      user: result,
    };
    return null;
  }
}
