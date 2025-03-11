import { PedidosEquiposEntity } from "src/pedidos_equipos/pedidos_equipos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @Column('text')
  estado: string;

  @Column('numeric')
  precioAlquiler: number;

  @Column('bytea')
  imagen: Buffer;

  @OneToMany(() => PedidosEquiposEntity, (pedidoEquipo) => pedidoEquipo.equipo)
  pedidosEquipos: PedidosEquiposEntity[];
}