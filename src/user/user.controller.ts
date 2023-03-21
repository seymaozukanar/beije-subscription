import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users/')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException('User with the given ID does not exist!');
    }
    return user;
  }

  @Post('/sign-up')
  async createUser(@Body() createUserDTO: createUserDTO) {
    const newUser = await this.userService.createUser(createUserDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    //newUser.save();
    return newUser;
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() createUserDTO: createUserDTO) {
    const updatedUser = await this.userService.updateUser(id, createUserDTO);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    const user = await this.userService.deleteUser(id);
    if (!user)
      throw new NotFoundException('User with the given ID does not exist!');
    return user;
  }
}
