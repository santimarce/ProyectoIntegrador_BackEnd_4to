import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Teacher } from '../entities/teachers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
    constructor(@InjectRepository(Teacher) private teacherRepósitory: Repository<Teacher>) { };
    crearTeacher() {

    }
}