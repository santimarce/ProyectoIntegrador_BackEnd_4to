import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from '../entities/schedule.entity';
import { Repository } from 'typeorm';
import { UpdateScheduleDto } from '../dto/updatehorario.dto';
import { CreateScheduleDto } from '../dto/createhorario.dto';
import { validate } from 'class-validator';

@Injectable()
export class ScheduleService {
    constructor(@InjectRepository(Schedule) private scheduleRepo: Repository<Schedule>) { };

    async crearSchedule(createScheduleDto: CreateScheduleDto) {

        const errors = await validate(createScheduleDto);
        if (errors.length > 0) {
            throw new BadRequestException('Errores de validación en los campos del horario.');
        }
        const existingTeacher = await this.scheduleRepo.findOne({ where: { id_horario: createScheduleDto.id_horario } });
        if (existingTeacher) {
            throw new ConflictException('Ya existe esta entrada de horario');
        }
        const schedule = this.scheduleRepo.create(createScheduleDto);
        await this.scheduleRepo.save(schedule);

        return `Nuevo horario con id ${schedule.id_horario} creado`;
    }

    async findAll() {
        return await this.scheduleRepo.find();
    }

    async findOne(id_horario: string) {
        const teacher = await this.scheduleRepo.findOne({ where: { id_horario } });
        return teacher;
    }

    async updateTeacher(id_horario: string, updateSchedule: UpdateScheduleDto) {
        let schedule = await this.findOne(id_horario);
        if (!schedule) {
            return "No existe";
        }
        const updateTeacherDtoProperties = Object.keys(updateSchedule);

        for (const property of Object.keys(schedule)) {
            if (updateTeacherDtoProperties.includes(property)) {
                schedule[property] = updateSchedule[property];
            }
        }
        await this.scheduleRepo.update(id_horario, schedule);
        return "OK";
    }

    async remove(id_horario: string) {
        let schedule = await this.findOne(id_horario);
        if (schedule) {
            const elimn = this.scheduleRepo.delete({ id_horario });
            return "OK";
        } else {
            return "No existe";
        }
    }

}
