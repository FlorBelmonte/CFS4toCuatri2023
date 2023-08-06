import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}

