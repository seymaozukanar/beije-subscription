import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { Role } from '../auth/role.enum';
import { Roles } from '../auth/roles.decorator';

@Controller('orders/')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Roles(Role.Admin)
  @Get('active/')
  async getActiveOrders() {
    const orders = this.orderService.getActiveOrders();
    return orders;
  }

  @Roles(Role.Admin)
  @Get('processed/')
  async getProcessedOrders() {
    const orders = this.orderService.getProcessedOrders();
    return orders;
  }

  @Roles(Role.Admin)
  @Get(':id')
  async getOrder(@Param('id') id: number) {
    const order = this.orderService.getOrder(id);
    if (!order) {
      throw new NotFoundException('Order with the given ID does not exist!');
    }
    return order;
  }
}
