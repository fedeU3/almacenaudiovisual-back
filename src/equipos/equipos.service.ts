import { Injectable } from '@nestjs/common';

@Injectable()
export class EquiposService {
  getHello(): string {
    return 'Hello World!';
  }
}