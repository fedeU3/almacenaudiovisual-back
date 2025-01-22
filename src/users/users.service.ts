import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

interface IUserCreate {
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  getUsers() {
    return this.usersRepository.find();
  }
  getById(id: string) {
    return this.usersRepository.findOne({
      where: { id }
    });
  }
  getByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email }
    });
  }
  async createUser(user: IUserCreate) {
    
    const newUser: UserEntity = await this.usersRepository.create({
      ...user,
      id: uuidv4(),
    });

    await this.usersRepository.save(newUser);
    return this.usersRepository.save(user);
  }
}
