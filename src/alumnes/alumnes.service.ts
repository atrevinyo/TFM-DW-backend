import { Injectable } from '@nestjs/common';
import { CreateAlumneDto } from './dto/create-alumne.dto';
import { UpdateAlumneDto } from './dto/update-alumne.dto';

@Injectable()
export class AlumnesService {
  create(createAlumneDto: CreateAlumneDto) {
    return 'This action adds a new alumne';
  }

  findAll() {
    return `This action returns all alumnes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumne`;
  }

  update(id: number, updateAlumneDto: UpdateAlumneDto) {
    return `This action updates a #${id} alumne`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumne`;
  }
}
