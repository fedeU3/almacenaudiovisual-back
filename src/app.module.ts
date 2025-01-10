import { Module } from '@nestjs/common';
import { EquiposModule } from './equipos/equipos.module';
import { MiembrosModule } from './miembros/miembros.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url: "postgresql://postgres:tCr0GAe34O3xthG8@db.dyfcrhdjmmbfhnteepvj.supabase.co:5432/postgres",
      entities: [],
      synchronize: true,
    }),
    EquiposModule,
    MiembrosModule,
    PedidosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
