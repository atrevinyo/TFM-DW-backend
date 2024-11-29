import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignaturaDto } from './create-assignatura.dto';

export class UpdateAssignaturaDto extends PartialType(CreateAssignaturaDto) {}

