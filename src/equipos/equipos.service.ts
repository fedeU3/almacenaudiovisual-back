import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoEntity } from 'src/equipos/equipo.entity';
import { Repository } from 'typeorm';
import { CreateEquipoDTO } from './dto/CreateEquipoDTO';

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

  async createEquipo(createEquipoDto: CreateEquipoDTO) {
    const equipo = new EquipoEntity();

    equipo.nombre = createEquipoDto.nombre;
    equipo.tipo = createEquipoDto.tipo;
    equipo.pertenencia = createEquipoDto.pertenencia;
    // Convertir los valores numéricos de string a number
    equipo.cantidadTotal = Number(createEquipoDto.cantidadTotal);
    equipo.cantidadDisponible = Number(createEquipoDto.cantidadDisponible);

    return this.equipoRepository.save(equipo);
  }

  async deleteEquipo(id: number): Promise<void> {
    const equipo = await this.equipoRepository.findOneBy({ id });
    if (!equipo) {
      throw new NotFoundException(`Equipo con id ${id} no encontrado`);
    }
    await this.equipoRepository.delete(id);
  }

}