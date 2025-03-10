import { Injectable, NotFoundException, PreconditionFailedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { CreatePedidoDTO } from './dto/CreatePedidoDTO';
import { EquipoEntity } from 'src/equipos/equipo.entity';


@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(EquipoEntity) private readonly equipoRepository: Repository<EquipoEntity>,
  ) { }

  
  getAll() {
    return this.pedidoRepository.find({relations: ["miembro", "equipo"]});
  }

  // Obtener un pedido por ID
  async findById(id: number) {
    const pedido = await this.pedidoRepository.findOne({ where: { id } }); // Espera a que la promesa se resuelva

    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }

    return pedido;
  } 

  async createPedido(createPedidoDto: CreatePedidoDTO) {

    const equipo = await this.equipoRepository.findOneBy({ id: createPedidoDto.idEquipo });

    if (!equipo) {
      throw new NotFoundException(`Equipo con ID ${createPedidoDto.idEquipo} no encontrado`);
    }

    if (equipo.cantidadDisponible < 1) {
      throw new PreconditionFailedException(`El equipo ${equipo.nombre} no está disponible`);
    }

    const pedido = new PedidoEntity();
    
    pedido.fechaHoraPedido = new Date();
    pedido.fechaHoraEntrega = new Date(createPedidoDto.fechaHoraEntrega);
    pedido.fechaHoraPactada = new Date(createPedidoDto.fechaHoraPactada);
    pedido.fechaHoraDevolucion = null;
    pedido.estado = 'alquilado';
    pedido.direccion = createPedidoDto.direccion;
  
    // Mapear las relaciones usando los IDs del DTO
    pedido.miembro = { id: createPedidoDto.idMiembro } as any;
    pedido.equipo = createPedidoDto.idEquipo ? ({ id: createPedidoDto.idEquipo } as any) : null;

    await this.pedidoRepository.save(pedido);

    

    await this.equipoRepository.update(createPedidoDto.idEquipo, {
      cantidadDisponible: createPedidoDto.idEquipo ? (equipo.cantidadDisponible - 1) : null,
    });

    return pedido;
 }

}