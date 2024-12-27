import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import materiesData from './materies_competencies.json';

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

  async findOneByName(name: string): Promise<Materia | null> {
    return this.materiaModel.findOne({ nom: name }).exec();
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

  async seed(): Promise<void> {
    try {
      // Comprova si ja hi ha dades a la col·lecció
      const count = await this.materiaModel.countDocuments();
      if (count > 0) {
        console.log('Matèries ja existents, no es farà el seed.');
        return;
      }

      // Inserta les dades del JSON
      await this.materiaModel.insertMany(materiesData);
      console.log('Seed de matèries completat correctament.');
    } catch (error) {
      console.error('Error durant el seed de matèries:', error);
      throw new HttpException('Error al fer el seed de matèries', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
