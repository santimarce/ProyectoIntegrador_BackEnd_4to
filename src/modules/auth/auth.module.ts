import { Module } from '@nestjs/common';
import { Usuarios } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoModule } from '../catalogo/catalogo.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';
import { AuthController } from './controllers/auth.controller';
import { UserService } from './services/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuarios]),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secretKey', // Debes configurar una variable de entorno para el secreto
            signOptions: { expiresIn: '1h' },
        }),
        CatalogoModule
    ],
    providers: [AuthService, JwtStrategy, UserService],
    controllers: [AuthController]
})
export class AuthModule { }
