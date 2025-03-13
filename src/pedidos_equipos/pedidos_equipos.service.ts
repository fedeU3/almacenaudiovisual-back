import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PedidosEquiposEntity } from "./pedidos_equipos.entity";

  
  
  @Injectable()
  export class PedidosEquiposService {

    constructor(
      @InjectRepository(PedidosEquiposEntity) private readonly pedidosEquiposRepository: Repository<PedidosEquiposEntity>
    ) { }
    
    async getById(id: number): Promise<PedidosEquiposEntity> {
      return this.pedidosEquiposRepository.findOne({ where: { id }, relations: ['pedido', 'equipo'] });
    }


  }