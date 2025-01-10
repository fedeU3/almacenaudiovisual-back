import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'equipos'})
export class EquipoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  tipo: string;

  @Column('text')
  pertenencia: string;
}