import { Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsignaturasService {
  constructor(@InjectRepository(Asignatura) private asignaturaRepo: Repository<Asignatura>) { };
  
  // create(asignaturaRepo: CreateAsignaturaDto) {
  //   return 'This action adds a new asignatura';
  // }

  async findAll() {
    return await this.asignaturaRepo.find();
  }

  async findOne(id_asignatura: number) {
    return await this.asignaturaRepo.findOne({ where: { id_asignatura } });
  }

  // update(id: number, updateAsignaturaDto: UpdateAsignaturaDto) {
  //   return `This action updates a #${id} asignatura`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} asignatura`;
  // }
}
