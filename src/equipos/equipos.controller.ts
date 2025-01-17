import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EquiposService } from './equipos.service';

@Controller("equipos")
export class EquiposController {
  constructor(private readonly appService: EquiposService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  // Endpoint para obtener un equipo por ID
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findById(id);
  }
    
  

}