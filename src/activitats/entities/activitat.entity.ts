


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Competencia } from 'src/competencies/entities/competencia.entity';

export class Activitat extends Document {
  @Prop({ required: true })
  nom: string;

  @Prop()
  descripcio: string;

  @Prop()
  data: Date;

  @Prop()
  competencies: Competencia[];
}

