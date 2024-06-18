import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateScheduleDto {
    @IsDate()
    @IsOptional()
    horainicio_horario?: Date;

    @IsDate()
    @IsOptional()
    horafin_horario?: Date;

    @IsInt()
    @IsOptional()
    id_docente?: number;

    @IsInt()
    @IsOptional()
    id_curso?: number;

    @IsInt()
    @IsOptional()
    id_asignatura?: number;

    @IsInt()
    @IsOptional()
    id_dia?: number;

    @IsBoolean()
    @IsOptional()
    activo?: boolean; 
    
    // @IsObject()
    // @IsOptional()
    // docente?: TeacherDto;

    // @IsObject()
    // @IsOptional()
    // curso?: CourseDto;

    // @IsObject()
    // @IsOptional()
    // asignatura?: AsignaturaDto;

    // @IsObject()
    // @IsOptional()
    // dia?: DiasDto;

}
