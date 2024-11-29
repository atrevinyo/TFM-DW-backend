import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MateriaSchema } from './entities/materia.entity';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: 'Materia', schema: MateriaSchema }]),
  ],

  controllers: [MateriaController],
  providers: [MateriaService],
})
export class MateriaModule {}
