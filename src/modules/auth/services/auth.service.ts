import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from '../entities/user.entity';
import { JwtPayload } from '../models/jwt-payload.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuarios)
        private readonly usuarioRepository: Repository<Usuarios>,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(user_id: string, password: string): Promise<Usuarios> {
        const user = await this.usuarioRepository.findOne({ where: { user_id } });
        if (user && user.contrasenia === password) { // Deberías usar un hash de contraseñas en producción
            return user;
        }
        return null;
    }

    async login(user: Usuarios) {
        const payload: JwtPayload = { user_id: user.user_id, id_user: user.id_user };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(user: Usuarios) {
        return this.usuarioRepository.save(user);
    }
}
