import { Body, Controller, Post } from "@nestjs/common";
import { CreatePedidoEquipoDTO } from './dto/CreatePedidosEquiposDTO';
import { PedidosEquiposService } from './pedidos_equipos.service';

@Controller("pedidos_equipos")
export class PedidosEquiposController {
  constructor(private readonly pedidosEquiposService: PedidosEquiposService) {}

  @Post()
  async createPedidoEquipo(@Body() createPedidoEquipo: CreatePedidoEquipoDTO) {
    return this.pedidosEquiposService.createPedidoEquipos(createPedidoEquipo);
  }
}