import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitatsService } from './activitats.service';
import { CreateActivitatDto } from './dto/create-activitat.dto';
import { UpdateActivitatDto } from './dto/update-activitat.dto';

@Controller('activitats')
export class ActivitatsController {
  constructor(private readonly activitatsService: ActivitatsService) {}

  @Post()
  create(@Body() createActivitatDto: CreateActivitatDto) {
    return this.activitatsService.create(createActivitatDto);
  }

  @Get()
  findAll() {
    return this.activitatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitatDto: UpdateActivitatDto) {
    return this.activitatsService.update(+id, updateActivitatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitatsService.remove(+id);
  }
}
