import { Injectable } from '@nestjs/common';
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
}