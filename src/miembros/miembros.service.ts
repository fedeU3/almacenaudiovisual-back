import { Injectable } from '@nestjs/common';
import { MiembroEntity } from './miembro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MiembrosService {
  constructor(
    @InjectRepository(MiembroEntity) private readonly miembroRepository: Repository<MiembroEntity>,
  ) { }
  getAll() {
    return this.miembroRepository.find();
  }
}