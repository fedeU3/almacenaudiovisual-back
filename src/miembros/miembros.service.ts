import { Injectable, NotFoundException } from '@nestjs/common';
import { MiembroEntity } from './miembro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMiembroDTO } from './dto/CreateMiembroDTO';
import { UpdateMiembroDTO } from './dto/UpdateMiembroDTO';

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

  async updateMiembro(id: number, updateMiembroDto: UpdateMiembroDTO) {
    const miembro = await this.getById(id);
    if (!miembro) {
      throw new NotFoundException('Miembro not found');
    }
  
    const updateData = { ...updateMiembroDto }; // Create a new object with only the updated properties
    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]); // Remove undefined properties
  
    return this.miembroRepository.update(id, updateData);
  }
}