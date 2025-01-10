import { Injectable } from '@nestjs/common';

@Injectable()
export class PedidosService {
  getHello(): string {
    return 'Hello World!';
  }
}