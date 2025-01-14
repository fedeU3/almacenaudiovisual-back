import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';


@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
  ) { }
  getAll() {
    return this.pedidoRepository.find({relations: ["miembro", "equipo"]});
  }
}