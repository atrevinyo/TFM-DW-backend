import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetenciaDto } from './create-competency.dto';

export class UpdateCompetencyDto extends PartialType(CreateCompetenciaDto) {}
