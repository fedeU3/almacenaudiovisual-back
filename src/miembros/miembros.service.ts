import { Injectable } from '@nestjs/common';
import { MiembroEntity } from './miembro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMiembroDTO } from './dto/CreateMiembroDTO';

@Injectable()
export class MiembrosService {
  constructor(
    @InjectRepository(MiembroEntity) private readonly miembroRepository: Repository<MiembroEntity>,
  ) { }
  getAll() {
    return this.miembroRepository.find();
  }

  getById(id: number) {
    return this.miembroRepository.findOne({
      where: { id }
    });
  }
  getByUserName(userID: string) {
    return this.miembroRepository.findOne({
      where: { userID }
    });
  }
  async createUser(miembro: CreateMiembroDTO) {
    return this.miembroRepository.save(miembro);
  }
}