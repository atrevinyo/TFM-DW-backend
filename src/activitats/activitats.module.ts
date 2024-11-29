import { Module } from '@nestjs/common';
import { ActivitatsService } from './activitats.service';
import { ActivitatsController } from './activitats.controller';

@Module({
  controllers: [ActivitatsController],
  providers: [ActivitatsService],
})
export class ActivitatsModule {}
