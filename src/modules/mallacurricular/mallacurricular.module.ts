import { Module } from '@nestjs/common';
import { MallacurricularService } from './services/mallacurricular.service';
import { MallacurricularController } from './controllers/mallacurricular.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mallacurricular } from './entities/mallacurricular.entity';
import { MallaAsignatura } from './entities/mallaasignaturas.entity';
import { RegistroAsignaturasService } from './services/registroasignaturas.service';
import { RegistroAsignaturasController } from './controllers/mallaasignaturas.controller';
import { AsignaturasModule } from '../asignaturas/asignaturas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mallacurricular]),
    TypeOrmModule.forFeature([MallaAsignatura]),
    AsignaturasModule
  ],
  controllers: [MallacurricularController, RegistroAsignaturasController],
  providers: [MallacurricularService, RegistroAsignaturasService],
})
export class MallacurricularModule { }
