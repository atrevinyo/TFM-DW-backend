import { Module } from '@nestjs/common';
import { AlumnesService } from './alumnes.service';
import { AlumnesController } from './alumnes.controller';

@Module({

  // imports: [
  //   MongooseModule.forFeature([{ name: 'Alumne', schema: AlumneSchema }]),
  // ],

  controllers: [AlumnesController],
  providers: [AlumnesService],
})
export class AlumnesModule {}
