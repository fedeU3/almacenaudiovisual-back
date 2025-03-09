import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDTO } from './dto/CreatePedidoDTO';

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  getAll() {
    return this.pedidosService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.pedidosService.findById(id);
  }

  @Post()
  async createPedido(@Body() createPedidoDto: CreatePedidoDTO) {
    return this.pedidosService.createPedido(createPedidoDto);
  }
}
