import { Module } from '@nestjs/common';
import { TeachersService } from './services/teachers.service';
import { TeachersController } from './controllers/teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teachers.entity';
import { AsignaturaDocente } from './entities/asignaturadocentes.entity';
import { CatalogoModule } from '../catalogo/catalogo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([AsignaturaDocente]),
    CatalogoModule
  ],
  providers: [TeachersService],
  controllers: [TeachersController]
})
export class TeachersModule { }
