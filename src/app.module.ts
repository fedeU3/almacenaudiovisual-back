import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { MiembrosModule } from './miembros/miembros.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EquipoEntity } from './equipos/equipo.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [EquipoEntity],
      schema: 'almacenaudiovisual'
    }),
    EquiposModule,
    MiembrosModule,
    PedidosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
