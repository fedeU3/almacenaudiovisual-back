import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { CreatePedidoDTO } from './dto/CreatePedidoDTO';


@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
  ) { }
  getAll() {
    return this.pedidoRepository.find({relations: ["miembro", "equipo"]});
  }

  async createPedido(createPedidoDto: CreatePedidoDTO) {

    const pedido = new PedidoEntity();
    
    pedido.fechaHoraPedido = new Date(createPedidoDto.fechaHoraPedido);
    pedido.fechaHoraEntrega = new Date(createPedidoDto.fechaHoraEntrega);
    pedido.fechaHoraPactada = new Date(createPedidoDto.fechaHoraPactada);
    pedido.fechaHoraDevolucion = new Date(createPedidoDto.fechaHoraDevolucion);
    pedido.estado = createPedidoDto.estado;
  
    // Mapear las relaciones usando los IDs del DTO
    pedido.miembro = { id: createPedidoDto.idMiembro } as any;
    pedido.equipo = createPedidoDto.idEquipo ? ({ id: createPedidoDto.idEquipo } as any) : null;

    return this.pedidoRepository.save(pedido);
 }

}