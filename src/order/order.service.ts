import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async getOrders() {
    const orders = this.orderRepository.find();
    return orders;
  }

  async createOrder() {
    const newOrder = this.orderRepository.create();
    return newOrder;
  }
}
