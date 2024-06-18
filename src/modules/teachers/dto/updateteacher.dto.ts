import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsInt, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, MinLength, MaxLength } from "class-validator";

export class UpdateTeacherDto {
    // @MaxLength(10)
    // @IsString()
    // @IsNotEmpty()
    // id_docente: string;

    @ApiProperty({ example: '097546154', description: 'El contacto del docente' })
    @MaxLength(50)
    @IsString()
    @IsOptional()
    contacto_docente: string;

    @ApiProperty({ example: 'docente@yavirac.edu.ec', description: 'El mail del docente' })
    @MaxLength(100)
    @IsString()
    @IsOptional()
    email_docente: string;

    @ApiProperty({ example: 'C0n7r4s3ña', description: 'La contraseña del docente' })
    @MaxLength(100)
    @IsString()
    @IsOptional()
    contrasenia_docente: string;

    @ApiProperty({ example: 1, description: 'Id de la rama' })
    @IsOptional()
    @IsInt()
    id_rama: number;

    @ApiProperty({ example: 1, description: 'Id de la facultad' })
    @IsOptional()
    @IsInt()
    id_facultad: number;

    @ApiProperty({ example: 1, description: 'Id del estado' })
    @IsOptional()
    @IsInt()
    id_estado: number;

    @ApiProperty({ example: 1, description: 'Id del rol' })
    @IsOptional()
    @IsInt()
    id_rol: number;
}
