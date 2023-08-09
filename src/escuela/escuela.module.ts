import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { Escuela } from './entities/escuela.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from 'src/clase/entities/clase.entity';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [Escuela, Ciudad, Clase] )],
  controllers: [EscuelaController],
  providers: [EscuelaService]
})
export class EscuelaModule {}
