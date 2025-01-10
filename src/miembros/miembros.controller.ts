import { Controller, Get } from '@nestjs/common';
import { MiembrosService } from './miembros.service';

@Controller("miembros")
export class MiembrosController {
  constructor(private readonly appService: MiembrosService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}