import { Role } from "src/auth/enums/role.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'array',
    default: [Role.USER],
  })
  roles: string;

}