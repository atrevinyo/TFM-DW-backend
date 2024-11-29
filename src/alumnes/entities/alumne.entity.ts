
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Nota } from '../../nota/entities/nota.entity';

@Schema()
export class Alumne extends Document {
  @Prop({ required: true })
  nom: string;

  @Prop({ type: [Nota], default: [] })
  notes: Nota[];
}

export const AlumneSchema = SchemaFactory.createForClass(Alumne);
