import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { Escuela } from './escuela/entities/escuela.entity';
import { Estudiante } from './estudiante/entities/estudiante.entity';
import { Profesor } from './profesor/entities/profesor.entity';
import { EscuelaController } from './escuela/escuela.controller';
import { EstudianteController } from './estudiante/estudiante.controller';
import { ProfesorController } from './profesor/profesor.controller';
import { EscuelaService } from './escuela/escuela.service';
import { EstudianteService } from './estudiante/estudiante.service';
import { ProfesorService } from './profesor/profesor.service';

@Module({
  imports: [TypeOrmModule.forRoot({
"type": "mysql",
"host": "localhost",
"port": 3306,
"username": "root",
"password": "flor",
"database": "escolar",
"entities": [ Escuela, Estudiante, Profesor
],
"synchronize": true
} ),TypeOrmModule.forFeature([Escuela, Estudiante, Profesor]),
],
  controllers: [EscuelaController, EstudianteController, ProfesorController],
  providers: [EscuelaService, EstudianteService, ProfesorService],
})
export class AppModule {}
