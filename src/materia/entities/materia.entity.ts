


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Competencia } from '../../competencies/entities/competencia.entity';

@Schema()
export class Materia extends Document {
  @Prop({ required: false })
  nom: string;

  @Prop({ required: false })
  competencies: Competencia[]; // Referència a les competències
}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
