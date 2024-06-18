import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsInt, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, MinLength, MaxLength } from "class-validator";

export class CreateTeacherDto {

    @ApiProperty({ example: '0001112223', description: 'El ID del docente' })
    @MaxLength(10)
    @IsString()
    @IsNotEmpty()
    id_docente: string;
    
    @ApiProperty({ example: 'John Larry', description: 'El nombre del docente' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    nombres_docente: string;

    @ApiProperty({ example: 'Doe Jackson', description: 'El apellidos del docente' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    apellidos_docente: string;

    @ApiProperty({ example: '097546154', description: 'El contacto del docente' })
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    contacto_docente: string;

    @ApiProperty({ example: 'docente@yavirac.edu.ec', description: 'El mail del docente' })
    @MaxLength(100)
    @IsNotEmpty()
    @IsEmail()
    email_docente: string;

    @ApiProperty({ example: 'C0n7r4s3ña', description: 'La contraseña del docente' })
    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    contrasenia_docente: string;

    @ApiProperty({ example: 1, description: 'Id de la rama' })
    @IsNotEmpty()
    @IsInt()
    id_rama: number;

    @ApiProperty({ example: 1, description: 'Id de la facultad' })
    @IsNotEmpty()
    @IsInt()
    id_facultad: number;

    @ApiProperty({ example: 1, description: 'Id del estado' })
    @IsNotEmpty()
    @IsInt()
    id_estado: number;

    @ApiProperty({ example: 1, description: 'Id del rol' })
    @IsNotEmpty()
    @IsInt()
    id_rol: number;
}
