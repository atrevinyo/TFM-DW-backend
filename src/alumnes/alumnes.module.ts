import { Module } from '@nestjs/common';
import { AlumnesService } from './alumnes.service';
import { AlumnesController } from './alumnes.controller';
import { AlumneSchema } from './entities/alumne.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: 'Alumne', schema: AlumneSchema }]),
  ],

  controllers: [AlumnesController],
  providers: [AlumnesService],
})
export class AlumnesModule {}
