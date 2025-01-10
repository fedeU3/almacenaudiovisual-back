import { Module } from '@nestjs/common';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoEntity } from 'src/equipos/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EquipoEntity])],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class EquiposModule {}