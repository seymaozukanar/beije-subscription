import { Controller, Get, Post, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { createUserDTO } from './dtos/create-user.dto';


@Controller('users/')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    async getUsers(){
        const users = await this.userService.getUsers();
        return users;
    }

    @Get(':id')
    async getUser(@Param('id') id:number){
        const user = await this.userService.getUser(id);
        if (!user) throw new NotFoundException('User with the given ID does not exist!');
        return user;
    }

    @Post('create')
    async createUser(@Body() createUserDTO: createUserDTO){
        const user = await this.userService.createUser(createUserDTO);
        return user;
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: number){
        const user = await this.userService.deleteUser(id);
        if (!user) throw new NotFoundException('User with the given ID does not exist!');
        return user;
    }
}
