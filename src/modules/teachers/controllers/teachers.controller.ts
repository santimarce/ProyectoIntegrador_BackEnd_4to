import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TeachersService } from '../services/teachers.service';
import { CreateTeacherDto } from '../dto/createteacher.dto';
import { UpdateTeacherDto } from '../dto/updateteacher.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('docentes')
@Controller('docentes')
export class TeachersController {
    constructor(private readonly teacherServices: TeachersService) { }

    @Post()
    @ApiOperation({ summary: 'Crea un nuevo docente' })
    @ApiResponse({ status: 201, description: 'El docente ha sido creado.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    create(@Body() createTeacherDto: CreateTeacherDto) {
        return this.teacherServices.crearTeacher(createTeacherDto);
    }

    @Get()
    @ApiOperation({ summary: 'Consultar todos los docentes' })
    @ApiResponse({ status: 202, description: 'Todos los docentes' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.teacherServices.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtiene un docente por ID' })
    @ApiResponse({ status: 200, description: 'Docente encontrado.' })
    @ApiResponse({ status: 404, description: 'Docente no encontrado.' })
    findOne(@Param('id') id: string) {
        return this.teacherServices.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualiza un docente por su Id' })
    @ApiResponse({ status: 202, description: 'El docente ha sido encontrado.' })
    @ApiResponse({ status: 201, description: 'El docente ha sido modificado.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
        return this.teacherServices.updateTeacher(id, updateTeacherDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Borra un docente por ID' })
    @ApiResponse({ status: 200, description: 'Docente borrado.' })
    @ApiResponse({ status: 404, description: 'Docente no encontrado.' })
    remove(@Param('id') id: string) {
        return this.teacherServices.remove(id);
    }
}