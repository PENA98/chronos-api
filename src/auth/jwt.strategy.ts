import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // <-- extract JWT from Authorization header
      ignoreExpiration: false,
      secretOrKey: 'hide-me', // <-- secret or key to be used to verify JWT
      logging: true,
    });
  }

  async validate(payload: any) { // <-- payload = decoded JWT
    console.log(payload);
    return { id: payload.sub, username: payload.username }; // <-- return user object
  }
}
