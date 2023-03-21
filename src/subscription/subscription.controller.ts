import { Controller, Get, Post, Put, Body, Param, Request, NotFoundException } from '@nestjs/common';
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
    if (!subscription) {
      throw new NotFoundException('User with the given ID does not exist!');
    }
    return subscription;
  }

  @Post('create/')
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

  @Put(':id')
  async cancelSubscription(@Param('id') id: number) {
    const cancelledSubscription = await this.subscriptionService.cancelSubscription(id);
    return cancelledSubscription;
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
