import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EscuelaService {
  private escuelas : Escuela[] = [];

  constructor (@InjectRepository(Escuela)
  private readonly escuelaRepository : Repository<Escuela>) {}

  create(createEscuelaDto: CreateEscuelaDto) {
    return 'This action adds a new escuela';
  }

  findAll() {
    return `This action returns all escuela`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
