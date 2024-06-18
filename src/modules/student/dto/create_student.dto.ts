import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsInt, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, MinLength, MaxLength } from "class-validator";

export class CreateStudentDto {

    @ApiProperty({ example: '0001112223', description: 'El ID del alumno' })
    @MaxLength(10)
    @IsString()
    @IsNotEmpty()
    id_alumno: string;

    @ApiProperty({ example: 'John Larry', description: 'El nombre del alumno' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    nombres_alumno: string;

    @ApiProperty({ example: 'Doe Jackson', description: 'El apellidos del alumno' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    apellidos_alumno: string;

    @ApiProperty({ example: '15/12/2023', description: 'fecha de nacimiento del alumno' })
    @MaxLength(50)
    @IsDateString()
    @IsNotEmpty()
    fechanacimiento_alumno: string;

    @ApiProperty({ example: '097546154', description: 'El contacto del alumno' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    contacto_alumno: string;

    @ApiProperty({ example: 'calle _U entre este y el otro', description: 'La direccion del alumno' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    direccion_alumno: string;

    @ApiProperty({ example: 'alumno@yavirac.edu.ec', description: 'El mail del alumno' })
    @MaxLength(100)
    @IsNotEmpty()
    @IsEmail()
    email_alumno: string;

    @ApiProperty({ example: 'C0n7r4s3ña', description: 'La contraseña del alumno' })
    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    contrasenia_alumno: string;

    @ApiProperty({ example: 1, description: 'Id de la jornada' })
    @IsNotEmpty()
    @IsInt()
    id_jornada: number;

    @ApiProperty({ example: 1, description: 'Id del nivel' })
    @IsNotEmpty()
    @IsInt()
    id_nivel: number;

    @ApiProperty({ example: 1, description: 'Id del paralelo' })
    @IsNotEmpty()
    @IsInt()
    id_paralelo: number;

    @ApiProperty({ example: 1, description: 'Id de la carrera' })
    @IsNotEmpty()
    @IsInt()
    id_carrera: number;
}
