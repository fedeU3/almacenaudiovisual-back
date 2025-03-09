import { Allow } from 'class-validator';

export class UpdateMiembroDTO {
  @Allow()
  userID?: string;

  @Allow()
  password?: string;

  @Allow()
  nombre?: string;

  @Allow()
  apellido?: string;

  @Allow()
  direccion?: string;

  @Allow()
  rol?: string;

  @Allow()
  esAdmin?: boolean;

  @Allow()
  isActive?: boolean;
}