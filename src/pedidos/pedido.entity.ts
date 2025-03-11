import { MiembroEntity } from "src/miembros/miembro.entity";
import { PedidosEquiposEntity } from "src/pedidos_equipos/pedidos_equipos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'pedidos'})
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación con UserEntity (sin cascada)
  @ManyToOne(() => MiembroEntity, (miembro) => miembro.pedidos, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'idMiembro' }) // Define la columna de clave foránea
  miembro: MiembroEntity;

  @Column('text')
  estado: string;

  @Column('timestamp')
  fechaHoraPedido: Date;

  @Column('timestamp')
  fechaHoraEntrega: Date;

  @Column('timestamp')
  fechaHoraPactada: Date;

  @Column('timestamp')
  fechaHoraDevolucion: Date;

  @Column('text')
  direccion: string;

  @OneToMany(() => PedidosEquiposEntity, (pedidoEquipo) => pedidoEquipo.pedido)
  pedidosEquipos: PedidosEquiposEntity[];
}