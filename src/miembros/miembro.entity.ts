import { PedidoEntity } from "src/pedidos/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'miembros'})
export class MiembroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  userID: string;

  @Column('text')
  password: string;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('text')
  direccion: string;

  @Column('text')
  rol: string;

  @Column('bool')
  esAdmin: boolean;

  @OneToMany(() => PedidoEntity, (pedido) => pedido.miembro)
  pedidos: PedidoEntity[];

}