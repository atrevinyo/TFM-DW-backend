import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Request, Req, UseGuards } from '@nestjs/common';
import { AssignaturesService } from './assignatures.service';
import { CreateAssignaturaDto } from './dto/create-assignatura.dto';
import { UpdateAssignaturaDto } from './dto/update-assignatura.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('assignatures')
export class AssignaturesController {
  constructor(private readonly assignaturesService: AssignaturesService) {}

  // Endpoint per crear una assignatura
  @Get()
  @UseGuards( AuthGuard )
  async findAll(@Request() req) {
    console.log("REQ.USER.ID: ", req.user._id);
    const assignatures = await this.assignaturesService.findAll(req.user._id);

    // Transformar _id a id
    return assignatures.map(assignatura => ({
      ...assignatura,
      id: assignatura._id,
      _id: undefined, // Elimina el camp _id
      userId: undefined
  }));
  }

  @Get(':id')
  @UseGuards( AuthGuard )
  async findOne(@Request() req, @Param('id') id: string) {

    const assignatura = await  this.assignaturesService.findOne(req.user._id, id);

    const { userId, ...restOfassignatura } = assignatura.toObject();


    return restOfassignatura;

  }

  @UseGuards( AuthGuard )
  @Post()
  async create(@Request() req, @Body() createAssignaturaDto: CreateAssignaturaDto) {
    console.log("ESTIC AL CONTROLLER ASSIGNATURA: ", req.user);
    // Crea l'assignatura al servei
    return this.assignaturesService.create(req.user._id, createAssignaturaDto);

    // const { userId, ...restOfassignatura } = assignatura.toObject();
    // console.log("HE CREAT AQUESTA ASSIGANTURA: ", restOfassignatura);

    // return restOfassignatura;

    // Transformar _id a id
    // return {
    //   ...assignatura,
    //   id: assignatura._id,
    //   _id: undefined, // Elimina el camp _id
    //   userId: undefined
    // };
 }

 @UseGuards(AuthGuard)
 @Patch(':id')
  async update(@Request() req, @Param('id') id: string, @Body() updateAssignaturaDto: UpdateAssignaturaDto) {
    console.log("ESTIC ACTUALITZANT UNA ASSIGNATURA: ", updateAssignaturaDto);

    return this.assignaturesService.update(req.user._id, id, updateAssignaturaDto);
  }

  @Delete(':id')
  @UseGuards( AuthGuard )
  async delete(@Request() req, @Param('id') id: string) {
    return this.assignaturesService.delete(req.user._id, id);
  }


}
