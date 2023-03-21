import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDTO } from './dtos/create-user.dto';
//import { UserSchema } from './user.schema';


@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async getUsers(){
      const users = await this.usersRepository.find();
      return users;
    }

    async getUser(id: number): Promise<User>{
      const user = await this.usersRepository.findOneBy({id:id});
      return user;
    }

    async createUser(createUserDTO: createUserDTO): Promise<User>{
      const newUser = await this.usersRepository.create(createUserDTO);
      this.usersRepository.save(newUser);
      return newUser;
    }

    async deleteUser(id: number){
      const deletedUser = this.usersRepository.delete({id:id});
      return deletedUser;
    }
}
