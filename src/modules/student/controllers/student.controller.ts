import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { CreateStudentDto } from '../dto/create_student.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('student')
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    @ApiOperation({ summary: 'Crea un nuevo alumno' })
    @ApiResponse({ status: 201, description: 'El alumno ha sido creado.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.crearStudent(createStudentDto);
    }

    @Get()
    @ApiOperation({ summary: 'Consultar todos los alumno' })
    @ApiResponse({ status: 202, description: 'Todos los alumno' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.studentService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtiene un alumno por ID' })
    @ApiResponse({ status: 200, description: 'Alumno encontrado.' })
    @ApiResponse({ status: 404, description: 'Alumno no encontrado.' })
    findOne(@Param('id') id: string) {
        return this.studentService.findOne(id);
    }
}
