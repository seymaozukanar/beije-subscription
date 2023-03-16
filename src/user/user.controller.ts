import { Controller, Get, Query } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';


@Controller('users/')
export class UserController {}
