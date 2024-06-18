import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teachers.entity';
import { CreateTeacherDto } from '../dto/createteacher.dto';
import { UpdateTeacherDto } from '../dto/updateteacher.dto';
import { validate } from 'class-validator';
import { Rama } from 'src/modules/catalogo/entities/rama.entity';
import { Facultad } from 'src/modules/catalogo/entities/facultad.entity';
import { Estado } from 'src/modules/catalogo/entities/estado.entity';
import { Rol } from 'src/modules/catalogo/entities/rol.entity';

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
        @InjectRepository(Rama) private ramaRepository: Repository<Rama>,
        @InjectRepository(Facultad) private facultadRepository: Repository<Facultad>,
        @InjectRepository(Estado) private estadoRepository: Repository<Estado>,
        @InjectRepository(Rol) private rolRepository: Repository<Rol>,
    ) { }

    async crearTeacher(createTeacherDto: CreateTeacherDto) {
        const errors = await validate(createTeacherDto);
        if (errors.length > 0) {
            throw new BadRequestException('Errores de validación en los campos del profesor.');
        }

        const existingTeacher = await this.teacherRepository.findOne({ where: { id_docente: createTeacherDto.id_docente } });
        if (existingTeacher) {
            throw new ConflictException('Ya existe un docente con el mismo id.');
        }

        const { id_rama, id_facultad, id_estado, id_rol, ...teacherData } = createTeacherDto;

        const rama = await this.ramaRepository.findOneBy({ id_rama });
        const facultad = await this.facultadRepository.findOneBy({ id_facultad });
        const estado = await this.estadoRepository.findOneBy({ id_estado });
        const rol = await this.rolRepository.findOneBy({ id_rol });

        if (!rama || !facultad || !estado || !rol) {
            throw new BadRequestException('Alguna de las entidades relacionadas no fue encontrada.');
        }

        const teacher = this.teacherRepository.create({
            ...teacherData,
            rama,
            facultad,
            estado,
            rol,
        });

        await this.teacherRepository.save(teacher);

        return `Nuevo teacher con id ${teacher.id_docente} creado`;
    }

    async findAll() {
        return await this.teacherRepository.find({
            relations: ['rama', 'facultad', 'estado', 'rol'],
        });
    }

    async findOne(id_docente: string) {
        return await this.teacherRepository.findOne({
            where: { id_docente },
            relations: ['rama', 'facultad', 'estado', 'rol'],
        });
    }

    async updateTeacher(id_docente: string, updateTeacherDto: UpdateTeacherDto) {
        let teacher = await this.findOne(id_docente);
        if (!teacher) {
            throw new BadRequestException("El docente no existe");
        }

        const updateTeacherDtoProperties = Object.keys(updateTeacherDto);

        for (const property of updateTeacherDtoProperties) {
            teacher[property] = updateTeacherDto[property];
        }

        const { id_rama, id_facultad, id_estado, id_rol } = updateTeacherDto;

        if (id_rama) {
            const rama = await this.ramaRepository.findOneBy({ id_rama });
            if (!rama) {
                throw new BadRequestException('Rama no encontrada.');
            }
            teacher.rama = rama;
        }

        if (id_facultad) {
            const facultad = await this.facultadRepository.findOneBy({ id_facultad });
            if (!facultad) {
                throw new BadRequestException('Facultad no encontrada.');
            }
            teacher.facultad = facultad;
        }

        if (id_estado) {
            const estado = await this.estadoRepository.findOneBy({ id_estado });
            if (!estado) {
                throw new BadRequestException('Estado no encontrado.');
            }
            teacher.estado = estado;
        }

        if (id_rol) {
            const rol = await this.rolRepository.findOneBy({ id_rol });
            if (!rol) {
                throw new BadRequestException('Rol no encontrado.');
            }
            teacher.rol = rol;
        }

        await this.teacherRepository.save(teacher);
        return "OK";
    }

    async remove(id_docente: string) {
        const teacher = await this.findOne(id_docente);
        if (teacher) {
            await this.teacherRepository.delete({ id_docente });
            return "OK";
        } else {
            throw new BadRequestException("El docente no existe");
        }
    }
}
