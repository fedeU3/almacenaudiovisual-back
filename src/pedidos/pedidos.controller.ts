import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDTO } from './dto/CreatePedidoDTO';

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  getAll() {
    return this.pedidosService.getAll();
  }

  @Post()
  async createPedido(@Body() createPedidoDto: CreatePedidoDTO) {
    return this.pedidosService.createPedido(createPedidoDto);
  }
}
