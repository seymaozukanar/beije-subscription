import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders/')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('active/')
  async getActiveOrders() {
    const orders = this.orderService.getActiveOrders();
    return orders;
  }

  @Get('processed/')
  async getProcessedOrders() {
    const orders = this.orderService.getProcessedOrders();
    return orders;
  }

  @Get(':id')
  async getOrder(@Param('id') id: number) {
    const order = this.orderService.getOrder(id);
    if (!order) {
      throw new NotFoundException('Order with the given ID does not exist!');
    }
    return order;
  }
}
