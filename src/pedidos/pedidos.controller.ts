import { Controller, Get } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  getAll() {
    return this.pedidosService.getAll();
  }
}