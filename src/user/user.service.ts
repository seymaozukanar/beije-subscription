import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    const users = await this.usersRepository.find();
    return users;
  }

  async getUser(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: id });
    return user;
  }

  async createUser(createUserDTO: createUserDTO): Promise<User> {
    const newUser = await this.usersRepository.create(createUserDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    this.usersRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: number, createUserDTO: createUserDTO) {
    const updatedUser = await this.usersRepository.update(id, createUserDTO);
    return updatedUser;
  }

  async deleteUser(id: number) {
    const deletedUser = await this.usersRepository.findOneBy({ id:id });
    deletedUser.isActive = false;
    this.usersRepository.save(deletedUser);
    return deletedUser;
  }
}
