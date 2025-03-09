import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { UpdateMiembroDTO } from './dto/UpdateMiembroDTO';

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

  @Patch(':id')
  updateMiembro(@Param('id') id: number, @Body() updateMiembroDTO: UpdateMiembroDTO) {
    return this.miembrosService.updateMiembro(id, updateMiembroDTO);
  }


}