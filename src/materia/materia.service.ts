import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MateriaService {

  constructor(
    @InjectModel(Materia.name) private readonly materiaModel: Model<Materia>,
  ) {}

  create(createMateriaDto: CreateMateriaDto) {
    return 'This action adds a new materia';

  }

  async findAll(): Promise<Materia[]> {
      try {
        return await this.materiaModel.find().lean();
      } catch (error) {
        throw new HttpException('Error al carregar assignatures', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }


  findOne(id: number) {
    return `This action returns a #${id} materia`;
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return `This action removes a #${id} materia`;
  }
}
