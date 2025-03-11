import { EquipoEntity } from "src/equipos/equipo.entity";
import { PedidoEntity } from "src/pedidos/pedido.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'pedidos_equipos'})
export class PedidosEquiposEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // Relación con UserEntity (sin cascada)
    @ManyToOne(() => PedidoEntity, (pedido) => pedido.pedidosEquipos, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'idPedido' }) // Define la columna de clave foránea
    pedido: PedidoEntity;

    // Relación con UserEntity (sin cascada)
    @ManyToOne(() => EquipoEntity, (equipo) => equipo.pedidosEquipos, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'idEquipo' }) // Define la columna de clave foránea
    equipo: EquipoEntity;

}