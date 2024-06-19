import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from 'src/modules/catalogo/entities/rol.entity';
import { Usuarios } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Usuarios) private userRepository: Repository<Usuarios>,
        @InjectRepository(Rol) private rolRepository: Repository<Rol>,
    ) { }

    async findOne(user_id: string) {
        return await this.userRepository.findOne({
            where: { user_id },
            relations: ['rol'],
        });
    }

    async remove(user_id: string) {
        const teacher = await this.findOne(user_id);
        if (teacher) {
            await this.userRepository.delete({ user_id });
            return "OK";
        } else {
            throw new BadRequestException("El usuario no existe");
        }
    }
}
