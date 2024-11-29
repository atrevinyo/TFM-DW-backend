import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activitat } from '../activitats/entities/activitat.entity';
import { Alumne } from '../alumnes/entities/alumne.entity';
import { Assignatura } from './entities/assignatura.entity';
import { CreateAssignaturaDto } from './dto/create-assignatura.dto';
import { UpdateAssignaturaDto } from './dto/update-assignatura.dto';

@Injectable()
export class AssignaturesService {

  constructor(
    @InjectModel(Assignatura.name) private readonly assignaturaModel: Model<Assignatura>,
  ) {}

  async findAll(userId: string): Promise<Assignatura[]> {
    try {
      return await this.assignaturaModel.find({ userId }).lean();
    } catch (error) {
      throw new HttpException('Error al carregar assignatures', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Mètode per obtenir una assignatura per ID
  async findOne(userId: string, id: string): Promise<Assignatura> {
    const assignatura = await this.assignaturaModel.findOne({ _id: id, userId }).exec();
    if (!assignatura) {
      throw new NotFoundException(`No s'ha trobat l'assignatura amb ID ${id}`);
    }
    return assignatura;
  }

  // Mètode per crear una nova assignatura
  async create(userId: string, createAssignaturaDto: CreateAssignaturaDto): Promise<Assignatura> {
    console.log("ESTIC AL SERVEI!!!")
    const newAssignatura = new this.assignaturaModel({ ...createAssignaturaDto, userId });
    try {
      return await newAssignatura.save();
    } catch (error) {
      throw new HttpException('Error al crear assignatura', HttpStatus.BAD_REQUEST);
    }
  }

  // Mètode per actualitzar una assignatura existent
  async update(userId: string, id: string, updateAssignaturaDto: UpdateAssignaturaDto): Promise<Assignatura> {
    const updatedAssignatura = await this.assignaturaModel.findOneAndUpdate(
      { _id: id, userId },
      { $set: updateAssignaturaDto },
      { new: true },
    ).exec();

    if (!updatedAssignatura) {
      throw new NotFoundException(`No s'ha trobat l'assignatura amb ID ${id}`);
    }
    return updatedAssignatura;
  }

  // Mètode per eliminar una assignatura
  async delete(userId: string, id: string): Promise<void> {
    const result = await this.assignaturaModel.deleteOne({ _id: id, userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`No s'ha trobat l'assignatura amb ID ${id}`);
    }
  }
}
