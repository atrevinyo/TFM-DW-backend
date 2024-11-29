import { Injectable } from '@nestjs/common';
import { CreateCompetenciaDto } from './dto/create-competency.dto';
import { UpdateCompetencyDto } from './dto/update-competency.dto';

@Injectable()
export class CompetenciesService {
  create(createCompetencyDto: CreateCompetenciaDto) {
    return 'This action adds a new competency';
  }

  findAll() {
    return `This action returns all competencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} competency`;
  }

  update(id: number, updateCompetencyDto: UpdateCompetencyDto) {
    return `This action updates a #${id} competency`;
  }

  remove(id: number) {
    return `This action removes a #${id} competency`;
  }
}
