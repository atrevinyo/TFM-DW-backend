

import { IsString, IsArray } from 'class-validator';
import { Competencia } from '../../competencies/entities/competencia.entity';

export class CreateMateriaDto {
  @IsString()
  nom: string;

  @IsArray()
  competencies: Competencia[]; // Array d'IDs de competències
}
