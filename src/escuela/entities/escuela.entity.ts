import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Escuela {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}
