import { Controller, Get, Param } from '@nestjs/common';
import { CatalogoService } from '../services/catalogo.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('catalogos')
@Controller('catalogo')
export class CatalogoController {
    constructor(private readonly catalogoService: CatalogoService) { }

    @Get('carrera')
    @ApiOperation({ summary: 'Ver todas l@s carreras' })
    carrerafindAll() {
        return this.catalogoService.carrerafindAll();
    }
    @Get('carrera/:id')
    @ApiOperation({ summary: 'Ver carrera por id' })
    carrearafindOne(@Param('id') id: number) {
        return this.catalogoService.carrerafindOne(id);
    }
    @Get('rol')
    @ApiOperation({ summary: 'Ver tod@s l@s roles' })
    rolfindAll() {
        return this.catalogoService.rolfindAll();
    }
    @Get('rol/:id')
    @ApiOperation({ summary: 'Ver rol por id' })
    rolfindOne(@Param('id') id: number) {
        return this.catalogoService.rolfindOne(id);
    }
    @Get('nivel')
    @ApiOperation({ summary: 'Ver tod@s l@s niveles' })
    nivelfindAll() {
        return this.catalogoService.nivelfindAll();
    }
    @Get('nivel/:id')
    @ApiOperation({ summary: 'Ver nivel por id' })
    nivelfindOne(@Param('id') id: number) {
        return this.catalogoService.nivelfindOne(id);
    }
    @Get('estado')
    @ApiOperation({ summary: 'Ver tod@s l@s estados' })
    estadofindAll() {
        return this.catalogoService.estadofindAll();
    }
    @Get('estado/:id')
    @ApiOperation({ summary: 'Ver estado por id' })
    estadofindOne(@Param('id') id: number) {
        return this.catalogoService.estadofindOne(id);
    }
    @Get('facultad')
    @ApiOperation({ summary: 'Ver todas l@s facultades' })
    facultadfindAll() {
        return this.catalogoService.facultadfindAll();
    }
    @Get('facultad/:id')
    @ApiOperation({ summary: 'Ver facultad por id' })
    facultadfindOne(@Param('id') id: number) {
        return this.catalogoService.facultadfindOne(id);
    }
    @Get('jornada')
    @ApiOperation({ summary: 'Ver todas l@s jornadas' })
    jornadafindAll() {
        return this.catalogoService.jornadafindAll();
    }
    @Get('jornada/:id')
    @ApiOperation({ summary: 'Ver jornadas por id' })
    jornadafindOne(@Param('id') id: number) {
        return this.catalogoService.jornadafindOne(id);
    }
    @Get('dias')
    @ApiOperation({ summary: 'Ver tod@s l@s días' })
    diasfindAll() {
        return this.catalogoService.diasfindAll();
    }
    @Get('dias/:id')
    @ApiOperation({ summary: 'Ver dia por id' })
    diasfindOne(@Param('id') id: number) {
        return this.catalogoService.diasfindOne(id);
    }
    @Get('paralelo')
    @ApiOperation({ summary: 'Ver tod@s l@s paralelos' })
    paralelofindAll() {
        return this.catalogoService.paralelofindAll();
    }
    @Get('paralelo/:id')
    @ApiOperation({ summary: 'Ver paralelo por id' })
    paralelofindOne(@Param('id') id: number) {
        return this.catalogoService.paralelofindOne(id);
    }
    @Get('rama')
    @ApiOperation({ summary: 'Ver tod@s l@s ramas' })
    ramafindAll() {
        return this.catalogoService.ramafindAll();
    }
    @Get('rama/:id')
    @ApiOperation({ summary: 'Ver rama por id' })
    ramafindOne(@Param('id') id: number) {
        return this.catalogoService.ramafindOne(id);
    }
    @Get('tipoaula')
    @ApiOperation({ summary: 'Ver tod@s l@s tipos de aulas' })
    tipoaulafindAll() {
        return this.catalogoService.tipoaulafindAll();
    }
    @Get('tipoaula/:id')
    @ApiOperation({ summary: 'Ver tipo de aula por id' })
    tipoaulafindOne(@Param('id') id: number) {
        return this.catalogoService.tipoaulafindOne(id);
    }
}