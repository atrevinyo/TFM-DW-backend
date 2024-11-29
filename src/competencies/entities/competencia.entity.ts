

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Competencia extends Document {
  @Prop({ required: true })
  codi: string;

  @Prop()
  nom: string;

  @Prop()
  descripcio: string;
}

export const CompetenciaSchema = SchemaFactory.createForClass(Competencia);