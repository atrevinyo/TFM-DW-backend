import { PartialType } from '@nestjs/mapped-types';
import { CreateActivitatDto } from './create-activitat.dto';

export class UpdateActivitatDto extends PartialType(CreateActivitatDto) {}
