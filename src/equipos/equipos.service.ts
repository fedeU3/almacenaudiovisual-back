import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipoEntity } from 'src/equipos/equipo.entity';
import { ILike, MoreThan, Repository } from 'typeorm';
import { CreateEquipoDTO } from './dto/CreateEquipoDTO';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(EquipoEntity) private readonly equipoRepository: Repository<EquipoEntity>,
  ) { }

  getAll() {
    return this.equipoRepository.find();
  }

  
  getByName(nombre: string) {
    const equipo = this.equipoRepository.find({
      where: { nombre: ILike(`%${nombre}%`) },
    })

    if (!nombre) {
      throw new NotFoundException(`Equipo con ID ${nombre} no encontrado`);
    }

    return equipo;
  }

  getByType(tipo: string) {
    const equipo = this.equipoRepository.find({
      where: { tipo: ILike(`%${tipo}%`) },
    })

    if (!equipo) {
      throw new NotFoundException(`Equipo con ID ${tipo} no encontrado`);
    }

    return equipo;
  }

  async createEquipo(createEquipoDto: CreateEquipoDTO) {
    const equipo = new EquipoEntity();

    equipo.nombre = createEquipoDto.nombre;
    equipo.tipo = createEquipoDto.tipo;
    equipo.pertenencia = createEquipoDto.pertenencia;

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