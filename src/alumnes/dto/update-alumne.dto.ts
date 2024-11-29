import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumneDto } from './create-alumne.dto';

export class UpdateAlumneDto extends PartialType(CreateAlumneDto) {}
