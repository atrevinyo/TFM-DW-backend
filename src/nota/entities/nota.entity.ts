


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Nota extends Document {
  @Prop({ required: true })
  activitatId: string;

  @Prop({ required: true })
  competenciaId: string;

  @Prop({ required: true })
  valor: number;
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
