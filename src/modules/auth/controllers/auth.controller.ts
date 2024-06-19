import { Controller, Post, Body, UseGuards, Request, Get, Param } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtAuthGuard } from '../services/jwt-auth.guard';
import { AuthService } from '../services/auth.service';
import { Usuarios } from '../entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }

    @Post('login')
    @ApiOperation({ summary: 'Obtener token de inicio de sesión' })
    @ApiResponse({ status: 201, description: 'Inicio de sesión exitoso.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async login(@Body() body) {
        const user = await this.authService.validateUser(body.user_id, body.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() body) {
        const user = new Usuarios();
        user.email = body.email;
        user.contrasenia = body.contrasenia;
        // Set other properties as needed
        return this.authService.register(user);
    }

    @Get('test')
    @ApiOperation({ summary: 'Prueba del controlador de autenticación' })
    @ApiResponse({ status: 201, description: 'Funcionamiento correcto' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    testing() {
        return 'Auth funcionando';
    }


    @Get('user/:id')
    @ApiOperation({ summary: 'Obtiene un usuario por ID' })
    @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
