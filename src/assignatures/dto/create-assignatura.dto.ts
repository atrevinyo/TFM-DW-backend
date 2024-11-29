

import { IsString, IsArray, IsOptional, IsObject } from 'class-validator';
import { Alumne } from '../../alumnes/entities/alumne.entity';
import { Activitat } from '../../activitats/entities/activitat.entity';
import { Materia } from '../../materia/entities/materia.entity';

export class CreateAssignaturaDto {
  @IsString()
  nom: string;

  @IsString()
  id: string;

  @IsObject()
  @IsOptional()
  materia: Materia; // ID de la matèria

  @IsArray()
  @IsOptional()
  alumnes?: Alumne[];

  @IsArray()
  @IsOptional()
  activitats?: Activitat[];

  // @IsString()
  // userId?: string; // Identificador de l'usuari que crea l'assignatura

}
