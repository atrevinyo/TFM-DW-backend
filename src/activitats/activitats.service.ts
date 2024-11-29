import { Injectable } from '@nestjs/common';
import { CreateActivitatDto } from './dto/create-activitat.dto';
import { UpdateActivitatDto } from './dto/update-activitat.dto';

@Injectable()
export class ActivitatsService {
  create(createActivitatDto: CreateActivitatDto) {
    return 'This action adds a new activitat';
  }

  findAll() {
    return `This action returns all activitats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activitat`;
  }

  update(id: number, updateActivitatDto: UpdateActivitatDto) {
    return `This action updates a #${id} activitat`;
  }

  remove(id: number) {
    return `This action removes a #${id} activitat`;
  }
}
