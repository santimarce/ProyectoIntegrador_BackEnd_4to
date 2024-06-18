import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMallaAsignaturaDto {
    @ApiProperty({ example: 1, description: 'Id de la asignatura' })
    @IsInt()
    @IsNotEmpty()
    id_asignatura: number;

    @ApiProperty({ example: 'MC - DS - 17', description: 'Id de la malla curricular' })
    @IsString()
    @IsNotEmpty()
    id_mallacurricular: string;
}
