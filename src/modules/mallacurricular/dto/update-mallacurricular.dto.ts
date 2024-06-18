import { PartialType } from '@nestjs/mapped-types';
import { CreateMallaAsignaturaDto } from './create-mallacurricular.dto';

export class UpdateMallacurricularDto extends PartialType(CreateMallaAsignaturaDto) { }
