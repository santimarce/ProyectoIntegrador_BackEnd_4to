import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from '../models/jwt-payload.model';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'secretKey',
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.authService.validateUser(payload.user_id, null);
        if (!user) {
            throw new UnauthorizedException();
        }
        return { id_user: payload.id_user, user_id: payload.user_id };
    }
}
