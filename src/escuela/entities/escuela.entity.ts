import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('escuelas')
export class Escuela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}
