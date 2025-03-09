import { Controller, Get } from '@nestjs/common';
import { MiembrosService } from './miembros.service';

@Controller("miembros")
export class MiembrosController {
  constructor(private readonly miembrosService: MiembrosService) {}

  @Get()
  getAll() {
    return this.miembrosService.getAll();
  }

  getById(id: number) {
    return this.miembrosService.getById(id);
  }

}