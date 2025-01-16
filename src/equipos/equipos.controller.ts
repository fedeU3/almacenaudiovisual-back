import { Controller, Get } from '@nestjs/common';
import { EquiposService } from './equipos.service';

@Controller("equipos")
export class EquiposController {
  constructor(private readonly appService: EquiposService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(":id")
  getOne(){

    

  }
    
  

}