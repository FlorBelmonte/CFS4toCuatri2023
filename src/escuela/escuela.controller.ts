import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Controller('escuela')
export class EscuelaController {
  constructor(private readonly escuelaService: EscuelaService) {}

  @Post()
  create(@Body() createEscuelaDto: CreateEscuelaDto) {
    return this.escuelaService.create(createEscuelaDto);
  }

  @Get()
  findAll() {
    return this.escuelaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escuelaService.findOne(+id);
  }
  // @Get('get-all')
  // async getAllEscuelas() {
  //   return await this.escuelaService.getAll();
  // }

  // @Get(':id')
  // async getEscuelaById(@Param('id') id: number) {
  //   return await this.escuelaService.getById(id);
  // }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelaService.update(+id, updateEscuelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escuelaService.remove(+id);
  }
}
