import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoEntity } from 'src/equipos/equipo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(EquipoEntity) private readonly equipoRepository: Repository<EquipoEntity>,
  ) { }

  getAll() {
    return this.equipoRepository.find();
  }

  // Obtener un equipo por ID
  async findById(id: number) {
    const equipo = await this.equipoRepository.findOne({ where: { id } }); // Espera a que la promesa se resuelva

    if (!equipo) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }

    return equipo;
  } 


}