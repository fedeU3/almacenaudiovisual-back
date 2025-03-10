import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { PedidoEntity } from './pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoEntity } from 'src/equipos/equipo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoEntity]),
    TypeOrmModule.forFeature([EquipoEntity]),
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}