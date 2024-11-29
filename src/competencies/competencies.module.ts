import { Module } from '@nestjs/common';
import { CompetenciesService } from './competencies.service';
import { CompetenciesController } from './competencies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompetenciaSchema } from './entities/competencia.entity';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: 'Competencia', schema: CompetenciaSchema }]),
  ],

  controllers: [CompetenciesController],
  providers: [CompetenciesService],
})
export class CompetenciesModule {}
