import { Controller, Get, Post, Delete, Put, Body, Param, Request } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { createSubscriptionDTO } from './dtos/create-subscription.dto';

@Controller('subscriptions/')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Get()
  async getSubscriptions() {
    const subscriptions = await this.subscriptionService.getSubscriptions();
    return subscriptions;
  }

  @Get(':id')
  async getSubscription(@Param('id') id: number) {
    const subscription = this.subscriptionService.getSubscription(id);
    return subscription;
  }

  @Post(':id')
  async createSubscription(
    @Request() req,
    @Body() createSubscriptionDTO: createSubscriptionDTO,
  ) {
    const userID = req.user.userID;
    const newSubscription = await this.subscriptionService.createSubscription(
      userID,
      createSubscriptionDTO,
    );
    return newSubscription;
  }

  @Delete(':id')
  async deleteSubscription(@Param('id') id: number) {
    this.subscriptionService.deleteSubscription(id);
  }

  @Put(':id')
  async updateSubscription(
    @Param('id') id: number,
    @Request() req,
    @Body() createSubscriptionDTO: createSubscriptionDTO,
  ) {
    const userID = req.user.userID;
    const updatedSubscription =
      await this.subscriptionService.updateSubscription(
        userID,
        id,
        createSubscriptionDTO,
      );
    return updatedSubscription;
  }
}
