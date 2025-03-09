import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDTO } from './dto/CreateEquipoDTO';

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

  @Post()
  async createEquipo(@Body() createEquipoDto: CreateEquipoDTO) {
    return this.appService.createEquipo(createEquipoDto);
  }


  @Delete(':id')
  async deleteEquipo(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteEquipo(id);
  }

}