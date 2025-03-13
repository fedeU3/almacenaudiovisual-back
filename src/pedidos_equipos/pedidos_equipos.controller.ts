import { Controller, Get, Param, Post } from "@nestjs/common";
import { PedidosEquiposService } from './pedidos_equipos.service';

@Controller("pedidos_equipos")
export class PedidosEquiposController {
  constructor(private readonly pedidosEquiposService: PedidosEquiposService) {}

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.pedidosEquiposService.getById(id);
  }

}