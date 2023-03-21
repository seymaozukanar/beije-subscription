import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order, orderStatus } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async getActiveOrders() {
    const orders = this.orderRepository.find({ where: { status: orderStatus.RECEIVED }});
    return orders;
  }

  async getProcessedOrders() {
    const statusOptions = [orderStatus.CANCELLED, orderStatus.COMPLETED, orderStatus.DELIVERED, orderStatus.NOT_DELIVERED, orderStatus.ON_THE_WAY];
    const orders = this.orderRepository.find({ where: { status: In(statusOptions) } });
    return orders;
  }

  async getOrder(id: number) {
    const order = this.orderRepository.findOneBy({ id:id });
    return order;
  }
}
