import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroAsignaturasService } from '../services/registroasignaturas.service';
import { CreateMallaAsignaturaDto } from '../dto/create-mallacurricular.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('registrosmalla')
export class RegistroAsignaturasController {
  constructor(private readonly registmallaService: RegistroAsignaturasService) { }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo registro de asignatura por malla' })
  @ApiResponse({ status: 201, description: 'El registro ha sido creado.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createMallacurricularDto: CreateMallaAsignaturaDto) {
    return this.registmallaService.create(createMallacurricularDto);
  }

  @Get()
  findAll() {
    return this.registmallaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.registmallaService.findOne(id);
  }
  /*
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMallacurricularDto: UpdateMallacurricularDto) {
      return this.registmallaService.update(+id, updateMallacurricularDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.registmallaService.remove(+id);
    }*/
}
