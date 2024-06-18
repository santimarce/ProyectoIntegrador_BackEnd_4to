import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateScheduleDto {
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    id_horario: string;

    @IsDate()
    @IsNotEmpty()
    horainicio_horario: Date;

    @IsDate()
    @IsNotEmpty()
    horafin_horario: Date;

    @IsInt()
    @IsNotEmpty()
    id_docente: number;

    @IsInt()
    @IsNotEmpty()
    id_curso: number;

    @IsInt()
    @IsNotEmpty()
    id_asignatura: number;

    @IsInt()
    @IsNotEmpty()
    id_dia: number;

    @IsBoolean()
    @IsOptional()
    activo?: boolean; 
    
    // @IsObject()
    // @IsNotEmpty()
    // docente: TeacherDto;

    // @IsObject()
    // @IsNotEmpty()
    // curso: CourseDto;

    // @IsObject()
    // @IsNotEmpty()
    // asignatura: AsignaturaDto;

    // @IsObject()
    // @IsNotEmpty()
    // dia: DiasDto;
}
