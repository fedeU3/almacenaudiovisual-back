import { Controller, Get } from '@nestjs/common';
import { EquiposService } from './equipos.service';

@Controller("equipos")
export class EquiposController {
  constructor(private readonly appService: EquiposService) {}

  @Get("hello")
  getHello(): string {
    return "hello";
  }

}