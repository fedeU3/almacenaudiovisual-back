export type CreateMiembroDTO = {
  userID: string;
  password: string;
  nombre: string;
  apellido: string;
  direccion: string;
  rol: string;
  esAdmin: boolean;
};