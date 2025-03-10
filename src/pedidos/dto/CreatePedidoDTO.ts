export type CreatePedidoDTO = {
  idMiembro: number;
  idEquipo?: number;
  fechaHoraPactada: Date;
  estado: string;
  direccion: string;
  };