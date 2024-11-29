import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnesService } from './alumnes.service';
import { CreateAlumneDto } from './dto/create-alumne.dto';
import { UpdateAlumneDto } from './dto/update-alumne.dto';

@Controller('alumnes')
export class AlumnesController {
  constructor(private readonly alumnesService: AlumnesService) {}

  @Post()
  create(@Body() createAlumneDto: CreateAlumneDto) {
    return this.alumnesService.create(createAlumneDto);
  }

  @Get()
  findAll() {
    return this.alumnesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumneDto: UpdateAlumneDto) {
    return this.alumnesService.update(+id, updateAlumneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnesService.remove(+id);
  }
}
