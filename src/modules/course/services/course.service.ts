import { Injectable } from '@nestjs/common';
import { Course } from '../entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(Course) private courseRepository: Repository<Course>) { };

    async findAll() {
        return await this.courseRepository.find();
    }

    async findOne(id_curso: string) {
        const course = await this.courseRepository.findOne({ where: { id_curso } });
        return course;
    }

    
}