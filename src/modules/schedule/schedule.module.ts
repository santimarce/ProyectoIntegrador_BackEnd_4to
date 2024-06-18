import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers/schedule.controller';
import { ScheduleService } from './services/schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { AlumnoHorario } from './entities/alumnohorarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule]), TypeOrmModule.forFeature([AlumnoHorario])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule { }
