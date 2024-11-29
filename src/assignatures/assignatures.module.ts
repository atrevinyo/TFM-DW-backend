import { Module } from '@nestjs/common';
import { AssignaturesService } from './assignatures.service';
import { AssignaturesController } from './assignatures.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignaturaSchema } from './entities/assignatura.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    MongooseModule.forFeature([
      { name: 'Assignatura', schema: AssignaturaSchema },
    ]),
    AuthModule,
  ],

  controllers: [AssignaturesController],
  providers: [AssignaturesService],
  exports: [AssignaturesService],
})
export class AssignaturesModule {}
