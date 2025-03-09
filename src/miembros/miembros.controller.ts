import { Controller, Get, Param } from '@nestjs/common';
import { MiembrosService } from './miembros.service';

@Controller("miembros")
export class MiembrosController {
  constructor(private readonly miembrosService: MiembrosService) {}

  @Get()
  getAll() {
    return this.miembrosService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.miembrosService.getById(id);
  }

  @Get('username/:userID')
  getByUserName(@Param('userID') userID: string) {
    return this.miembrosService.getByUserName(userID);
  }

}