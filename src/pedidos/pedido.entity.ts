import { EquipoEntity } from "src/equipos/equipo.entity";
import { MiembroEntity } from "src/miembros/miembro.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'pedidos'})
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación con UserEntity (sin cascada)
  @ManyToOne(() => MiembroEntity, (miembros) => miembros.pedidos, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'idMiembro' }) // Define la columna de clave foránea
  miembro: MiembroEntity;

  // Relación con EquipoEntity (sin cascada)
  @ManyToOne(() => EquipoEntity, (equipos) => equipos.pedidos, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'idEquipo' }) // Define la columna de clave foránea
  equipo: EquipoEntity | null;

  @Column('timestamp')
  fechaHoraPedido: Date;

  @Column('timestamp')
  fechaHoraEntrega: Date;

  @Column('timestamp')
  fechaHoraPactada: Date;

  @Column('timestamp')
  fechaHoraDevolucion: Date;

  @Column('text')
  estado: string;

  @Column('text')
  direccion: string;
}