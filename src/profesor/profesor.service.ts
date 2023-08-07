import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
private profesores: Profesor[] = [];

constructor (@InjectRepository(Profesor)
  private readonly profesorRepository : Repository<Profesor>) {}

  public async getAll() : Promise<Profesor[]> {
    let profesores: Profesor[] = await this.profesorRepository.find( );
    return this.profesores;
    }
  public async getById(id : number) : Promise<Profesor> {
      const criterio : FindOneOptions = { where: { idProfesor: id } }
      let profesor : Profesor = await this.profesorRepository.findOne(criterio);
      if (profesor)
      return profesor;
      }


  create(createProfesorDto: CreateProfesorDto) {
    return 'This action adds a new profesor';
  }

  findAll() {
    return `This action returns all profesor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesor`;
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
