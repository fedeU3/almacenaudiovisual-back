import { Controller, Get } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller()
export class PedidosController {
  constructor(private readonly appService: PedidosService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}