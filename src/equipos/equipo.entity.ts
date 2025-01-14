import { PedidoEntity } from "src/pedidos/pedido.entity";
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

  @Column('numeric')
  cantidadTotal: number;

  @Column('numeric')
  cantidadDisponible: number;

  @OneToMany(() => PedidoEntity, (pedido) => pedido.equipo)
  pedidos: PedidoEntity[];
}