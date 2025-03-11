import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { MiembrosModule } from './miembros/miembros.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EquipoEntity } from './equipos/equipo.entity';
import { MiembroEntity } from './miembros/miembro.entity';
import { PedidoEntity } from './pedidos/pedido.entity';
import { AuthModule } from './auth/auth.module';
import { PedidosEquiposEntity } from './pedidos_equipos/pedidos_equipos.entity';
import { PedidosEquiposModule } from './pedidos_equipos/pedidos_equipos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [EquipoEntity,MiembroEntity,PedidoEntity,PedidosEquiposEntity],
      schema: 'almacenaudiovisual'
    }),
    EquiposModule,
    MiembrosModule,
    PedidosModule,
    PedidosEquiposModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
