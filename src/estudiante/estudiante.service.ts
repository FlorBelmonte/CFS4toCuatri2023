import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudianteService {
private estudiantes: Estudiante[] = [];
constructor (@InjectRepository(Estudiante)
  private readonly estudianteRepository : Repository<Estudiante>) {}


  public async getAll() : Promise<Estudiante[]> {
    let estudiantes: Estudiante[] = await this.estudianteRepository.find( );
    return this.estudiantes;
    }
  public async getById(id : number) : Promise<Estudiante> {
      const criterio : FindOneOptions = { where: { idEstudiante: id } }
      let estudiante : Estudiante = await this.estudianteRepository.findOne(criterio);
      if (estudiante)
      return estudiante;
      }


  create(createEstudianteDto: CreateEstudianteDto) {
    return 'This action adds a new estudiante';
  }

  findAll() {
    return `This action returns all estudiante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
