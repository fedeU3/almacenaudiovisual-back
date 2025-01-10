import { Injectable } from '@nestjs/common';

@Injectable()
export class MiembrosService {
  getHello(): string {
    return 'Hello World!';
  }
}