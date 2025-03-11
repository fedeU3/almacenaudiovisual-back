import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { CreatePedidoDTO } from './dto/CreatePedidoDTO';
import { PedidosEquiposEntity } from 'src/pedidos_equipos/pedidos_equipos.entity';
import { EquipoEntity } from 'src/equipos/equipo.entity';


@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(PedidosEquiposEntity) private readonly pedidosEquiposRepository: Repository<PedidosEquiposEntity>,
    @InjectRepository(EquipoEntity) private readonly equipoRepository: Repository<EquipoEntity>,
  ) { }

  
  getAll() {
    return this.pedidoRepository.find({relations: ["miembro"]});
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
    const fechaHoraPedido = new Date();
    const fechaHoraEntrega = new Date(createPedidoDto.fechaHoraEntrega);
    const fechaHoraPactada = new Date(createPedidoDto.fechaHoraPactada);

    // Validaciones básicas de fechas
    if (fechaHoraEntrega >= fechaHoraPactada) {
      throw new Error('La fecha de entrega no puede ser anterior a la fecha del pedido.');
    }

    if (fechaHoraPactada <= fechaHoraEntrega) {
      throw new Error('La fecha pactada no puede ser anterior a la fecha de entrega.');
    }

    const equipoId = createPedidoDto.idEquipo[0];
    const equipo = await this.equipoRepository.findOne({ where: { id: equipoId } });
    
    if (!equipo) {
        throw new Error('El equipo seleccionado no existe.');
    }
    // Validar disponibilidad del equipo
    const pedidosExistentes = await this.pedidosEquiposRepository
      .createQueryBuilder('pe')
      .innerJoin('pe.pedido', 'p')
      .innerJoin('pe.equipo', 'e') // Aseguramos que estamos relacionando con la entidad de equipo
      .where(
        `e.id = :equipoId AND ((:fechaHoraEntrega BETWEEN p.fechaHoraEntrega AND p.fechaHoraPactada)
        OR (:fechaHoraPactada BETWEEN p.fechaHoraEntrega AND p.fechaHoraPactada)
        OR (p.fechaHoraEntrega BETWEEN :fechaHoraEntrega AND :fechaHoraPactada))`,
        { equipoId, fechaHoraEntrega, fechaHoraPactada }
      )
      .getMany();

    if (pedidosExistentes.length > 0) {
        throw new Error('El equipo seleccionado ya está reservado en las fechas ingresadas.');
    }

    // Creación del pedido
    const pedido = new PedidoEntity();
    pedido.fechaHoraPedido = fechaHoraPedido;
    pedido.fechaHoraEntrega = fechaHoraEntrega;
    pedido.fechaHoraPactada = fechaHoraPactada;
    pedido.fechaHoraDevolucion = null;
    pedido.estado = 'alquilado';
    pedido.direccion = createPedidoDto.direccion;
    pedido.miembro = { id: createPedidoDto.idMiembro } as any;

    // Creación del pedido de equipo
    const pedidoEquipo = new PedidosEquiposEntity();
    pedidoEquipo.equipo = equipo;

    // Asociar pedido y pedidoEquipo
    pedido.pedidosEquipos = [pedidoEquipo];

    // Guardar pedido
    const pedidoResult = await this.pedidoRepository.save(pedido);

    // Asociar y guardar el pedido de equipo
    pedidoEquipo.pedido = pedidoResult;
    await this.pedidosEquiposRepository.save(pedidoEquipo);
    return {
      id: pedidoResult.id
    };
 }

}