import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../dto/create_student.dto';
import { validate } from 'class-validator';
import { Jornada } from 'src/modules/catalogo/entities/jornada.entity';
import { Nivel } from 'src/modules/catalogo/entities/nivel.entity';
import { Paralelo } from 'src/modules/catalogo/entities/paralelo.entity';
import { Carrera } from 'src/modules/catalogo/entities/carrera.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
        @InjectRepository(Jornada) private jornadaRepository: Repository<Jornada>,
        @InjectRepository(Nivel) private nivelRepository: Repository<Nivel>,
        @InjectRepository(Paralelo) private paraleloRepository: Repository<Paralelo>,
        @InjectRepository(Carrera) private carreraRepository: Repository<Carrera>,
    ) { }

    async crearStudent(createStudentDto: CreateStudentDto) {
        const errors = await validate(createStudentDto);
        if (errors.length > 0) {
            throw new BadRequestException('Errores de validación en los campos del estudiante.');
        }

        const existingStudent = await this.studentRepository.findOne({ where: { id_alumno: createStudentDto.id_alumno } });
        if (existingStudent) {
            throw new ConflictException('Ya existe un estudiante con el mismo id.');
        }

        const { id_jornada, id_nivel, id_paralelo, id_carrera, ...studentData } = createStudentDto;

        const jornada = await this.jornadaRepository.findOneBy({ id_jornada });
        const nivel = await this.nivelRepository.findOneBy({ id_nivel });
        const paralelo = await this.paraleloRepository.findOneBy({ id_paralelo });
        const carrera = await this.carreraRepository.findOneBy({ id_carrera });

        if (!jornada || !nivel || !paralelo || !carrera) {
            throw new BadRequestException('Alguna de las entidades relacionadas no fue encontrada.');
        }

        const student = this.studentRepository.create({
            ...studentData,
            jornada,
            nivel,
            paralelo,
            carrera,
        });

        await this.studentRepository.save(student);

        return `Nuevo estudiante con id ${student.id_alumno} creado`;
    }

    async findAll() {
        return await this.studentRepository.find({
            relations: ['jornada', 'nivel', 'paralelo', 'carrera'],
        });
    }

    async findOne(id_alumno: string) {
        return await this.studentRepository.findOne({
            where: { id_alumno },
            relations: ['jornada', 'nivel', 'paralelo', 'carrera'],
        });
    }
}
