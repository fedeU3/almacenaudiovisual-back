import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EquipoEntity } from "src/equipos/equipo.entity";
import { PedidoEntity } from "src/pedidos/pedido.entity";
import { Repository } from "typeorm";
import { CreatePedidoEquipoDTO } from "src/pedidos_equipos/dto/CreatePedidosEquiposDTO";

  
  
  @Injectable()
  export class PedidosEquiposService {

    constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(EquipoEntity) private readonly equipoRepository: Repository<EquipoEntity>,
    ) { }
    
  
  async createPedidoEquipos(createPedidoEquipoDto: CreatePedidoEquipoDTO) {

    
  }

  }