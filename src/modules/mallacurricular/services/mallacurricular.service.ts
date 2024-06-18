import { Injectable } from '@nestjs/common';
import { Mallacurricular } from '../entities/mallacurricular.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';

@Injectable()
export class MallacurricularService {
  constructor(@InjectRepository(Mallacurricular) private mallaRepository: Repository<Mallacurricular>) { };

  /*create(createMallacurricularDto: CreateMallacurricularDto) {
    return 'This action adds a new mallacurricular';
  }*/

  async findAll() {
    return await this.mallaRepository.find();
  }

  async findOne(id_mallacurricular: string) {
    const malla = await this.mallaRepository.findOne({ where: { id_mallacurricular } });
    return malla;
  }

  /*update(id_mallacurricular: number, updateMallacurricularDto: UpdateMallacurricularDto) {
    return `This action updates a #${id} mallacurricular`;
  }

  remove(id: number) {
    return `This action removes a #${id} mallacurricular`;
  }*/
}
