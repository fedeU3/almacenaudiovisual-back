export type CreatePedidoDTO = {
  idMiembro: number;
  idEquipo?: number;
  fechaHoraPedido: Date;
  fechaHoraEntrega: Date;
  fechaHoraPactada: Date;
  fechaHoraDevolucion: Date;
  estado: string;
  };