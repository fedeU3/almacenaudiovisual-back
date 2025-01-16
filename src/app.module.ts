import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { MiembrosModule } from './miembros/miembros.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EquipoEntity } from './equipos/equipo.entity';
import { MiembroEntity } from './miembros/miembro.entity';
import { PedidoEntity } from './pedidos/pedido.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [EquipoEntity,MiembroEntity,PedidoEntity],
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
