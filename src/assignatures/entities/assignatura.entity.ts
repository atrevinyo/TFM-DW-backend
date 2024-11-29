import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Activitat } from '../../activitats/entities/activitat.entity';
import { Alumne } from '../../alumnes/entities/alumne.entity';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Materia } from '../..//materia/entities/materia.entity';

@Schema()
export class Assignatura extends Document {

  @Prop({ required: true })
  nom: string;

  @Prop({ required: false })
  id: string;

  @Prop({ required: false })
  materia: Materia;

  @Prop({ type: [Object], default: [] })
  @IsOptional()
  alumnes: Alumne[];

  @Prop({ type: [Object], default: [] })
  @IsOptional()
  activitats: Activitat[];

  @Exclude()
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const AssignaturaSchema = SchemaFactory.createForClass(Assignatura);

// Desactiva el camp __v
AssignaturaSchema.set('versionKey', false);

AssignaturaSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});
