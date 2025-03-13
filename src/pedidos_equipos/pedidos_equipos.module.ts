import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EquipoEntity } from "src/equipos/equipo.entity";
import { PedidoEntity } from "src/pedidos/pedido.entity";
import { PedidosEquiposController } from "./pedidos_equipos.controller";
import { PedidosEquiposService } from "./pedidos_equipos.service";
import { PedidosEquiposEntity } from "./pedidos_equipos.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoEntity]),
    TypeOrmModule.forFeature([EquipoEntity]),
    TypeOrmModule.forFeature([PedidosEquiposEntity]),
  ],
  controllers: [PedidosEquiposController],
  providers: [PedidosEquiposService],
})
export class PedidosEquiposModule {}