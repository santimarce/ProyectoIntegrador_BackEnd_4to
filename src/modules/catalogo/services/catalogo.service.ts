import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Carrera } from '../entities/carrera.entity';
import { Rol } from '../entities/rol.entity';
import { Nivel } from '../entities/nivel.entity';
import { Estado } from '../entities/estado.entity';
import { Facultad } from '../entities/facultad.entity';
import { Jornada } from '../entities/jornada.entity';
import { Dias } from '../entities/dias.entity';
import { Paralelo } from '../entities/paralelo.entity';
import { Rama } from '../entities/rama.entity';
import { TipoAula } from '../entities/tipoaula.entity';

@Injectable()
export class CatalogoService {

    constructor(@InjectRepository(Carrera) private carreraRepo: Repository<Carrera>,
        @InjectRepository(Rol) private rolRepo: Repository<Rol>,
        @InjectRepository(Nivel) private nivelRepo: Repository<Nivel>,
        @InjectRepository(Estado) private estadoRepo: Repository<Estado>,
        @InjectRepository(Facultad) private facultadRepo: Repository<Facultad>,
        @InjectRepository(Jornada) private jornadaRepo: Repository<Jornada>,
        @InjectRepository(Dias) private diasRepo: Repository<Dias>,
        @InjectRepository(Paralelo) private paraleloRepo: Repository<Paralelo>,
        @InjectRepository(Rama) private ramaRepo: Repository<Rama>,
        @InjectRepository(TipoAula) private tipoaulaRepo: Repository<TipoAula>,
    ) { };

    async carrerafindAll() {
        return await this.carreraRepo.find();
    }
    async carrerafindOne(id_carrera: number) {
        const carrera = await this.carreraRepo.findOne({ where: { id_carrera } });
        return carrera;
    }
    async rolfindAll() {
        return await this.rolRepo.find();
    }
    async rolfindOne(id_rol: number) {
        const rol = await this.rolRepo.findOne({ where: { id_rol } });
        return rol;
    }
    async nivelfindAll() {
        return await this.nivelRepo.find();
    }
    async nivelfindOne(id_nivel: number) {
        const nivel = await this.nivelRepo.findOne({ where: { id_nivel } });
        return nivel;
    }
    async estadofindAll() {
        return await this.estadoRepo.find();
    }
    async estadofindOne(id_estado: number) {
        const estado = await this.estadoRepo.findOne({ where: { id_estado } });
        return estado;
    }
    async facultadfindAll() {
        return await this.facultadRepo.find();
    }
    async facultadfindOne(id_facultad: number) {
        const facultad = await this.facultadRepo.findOne({ where: { id_facultad } });
        return facultad;
    }
    async jornadafindAll() {
        return await this.jornadaRepo.find();
    }
    async jornadafindOne(id_jornada: number) {
        const jornada = await this.jornadaRepo.findOne({ where: { id_jornada } });
        return jornada;
    }
    async diasfindAll() {
        return await this.diasRepo.find();
    }
    async diasfindOne(id_dia: number) {
        const dia = await this.diasRepo.findOne({ where: { id_dia } });
        return dia;
    }
    async paralelofindAll() {
        return await this.paraleloRepo.find();
    }
    async paralelofindOne(id_paralelo: number) {
        const paralelo = await this.paraleloRepo.findOne({ where: { id_paralelo } });
        return paralelo;
    }
    async ramafindAll() {
        return await this.ramaRepo.find();
    }
    async ramafindOne(id_rama: number) {
        const rama = await this.ramaRepo.findOne({ where: { id_rama } });
        return rama;
    }
    async tipoaulafindAll() {
        return await this.tipoaulaRepo.find();
    }
    async tipoaulafindOne(id_tipoaula: number) {
        const tipoaula = await this.tipoaulaRepo.findOne({ where: { id_tipoaula } });
        return tipoaula;
    }
}