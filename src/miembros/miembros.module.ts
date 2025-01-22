import { Module } from '@nestjs/common';
import { MiembrosController } from './miembros.controller';
import { MiembrosService } from './miembros.service';
import { MiembroEntity } from './miembro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MiembroEntity])],
  controllers: [MiembrosController],
  providers: [MiembrosService],
  exports: [MiembrosService],
})
export class MiembrosModule {}