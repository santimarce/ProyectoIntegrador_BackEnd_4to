import { Module } from '@nestjs/common';
import { CatalogoService } from './services/catalogo.service';
import { CatalogoController } from './controllers/catalogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Dias } from './entities/dias.entity';
import { Estado } from './entities/estado.entity';
import { Facultad } from './entities/facultad.entity';
import { Jornada } from './entities/jornada.entity';
import { Nivel } from './entities/nivel.entity';
import { Paralelo } from './entities/paralelo.entity';
import { Rama } from './entities/rama.entity';
import { Rol } from './entities/rol.entity';
import { TipoAula } from './entities/tipoaula.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carrera]),
    TypeOrmModule.forFeature([Dias]),
    TypeOrmModule.forFeature([Estado]),
    TypeOrmModule.forFeature([Facultad]),
    TypeOrmModule.forFeature([Jornada]),
    TypeOrmModule.forFeature([Nivel]),
    TypeOrmModule.forFeature([Paralelo]),
    TypeOrmModule.forFeature([Rama]),
    TypeOrmModule.forFeature([Rol]),
    TypeOrmModule.forFeature([TipoAula])
  ],
  providers: [CatalogoService],
  controllers: [CatalogoController],
  exports: [
    TypeOrmModule
  ]
})
export class CatalogoModule { }
