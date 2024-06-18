import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Mallacurricular } from '../entities/mallacurricular.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { MallaAsignatura } from '../entities/mallaasignaturas.entity';
import { Asignatura } from 'src/modules/asignaturas/entities/asignatura.entity';
import { validate } from 'class-validator';
import { CreateMallaAsignaturaDto } from '../dto/create-mallacurricular.dto';

@Injectable()
export class RegistroAsignaturasService {
  constructor(
    @InjectRepository(MallaAsignatura) private mallaAsignaturaRepository: Repository<MallaAsignatura>,
    @InjectRepository(Asignatura) private asignaturaRepository: Repository<Asignatura>,
    @InjectRepository(Mallacurricular) private mallacurricularRepository: Repository<Mallacurricular>,
  ) { }

  async create(createMallaAsignaturaDto: CreateMallaAsignaturaDto) {
    const errors = await validate(createMallaAsignaturaDto);
    if (errors.length > 0) {
      throw new BadRequestException('Errores de validación en los campos de MallaAsignatura.');
    }

    const { id_asignatura, id_mallacurricular } = createMallaAsignaturaDto;

    const asignatura = await this.asignaturaRepository.findOne({ where: { id_asignatura } });
    const malla = await this.mallacurricularRepository.findOne({ where: { id_mallacurricular } });

    if (!asignatura || !malla) {
      throw new BadRequestException('Alguna de las entidades relacionadas no fue encontrada.');
    }

    const mallaAsignatura = this.mallaAsignaturaRepository.create({
      asignaturas: asignatura,
      mallas: malla,
    });

    await this.mallaAsignaturaRepository.save(mallaAsignatura);

    return `Nuevo registro con id ${mallaAsignatura.id_malla_asignaturas} creado`;
  }

  async findAll() {
    return await this.mallaAsignaturaRepository.find({
      relations: ['asignaturas', 'mallas'],
    });
  }
  async findOne(id_malla_asignaturas: number) {
    return await this.mallaAsignaturaRepository.findOne({
      where: { id_malla_asignaturas },
      relations: ['asignaturas', 'mallas'],
    });
  }
  
  async delete(id_malla_asignaturas: number) {
    const mallaAsignatura = await this.mallaAsignaturaRepository.findOne({ where: { id_malla_asignaturas } });

    if (!mallaAsignatura) {
      throw new NotFoundException(`MallaAsignatura con id ${id_malla_asignaturas} no encontrada`);
    }

    await this.mallaAsignaturaRepository.remove(mallaAsignatura);
    return `MallaAsignatura con id ${id_malla_asignaturas} eliminada`;
  }
}