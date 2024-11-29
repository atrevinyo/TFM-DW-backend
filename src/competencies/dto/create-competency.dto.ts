

import { IsString } from 'class-validator';

export class CreateCompetenciaDto {
  @IsString()
  codi: string;

  @IsString()
  nom: string;

  @IsString()
  descripcio: string;
}
