
import { Injectable } from '@nestjs/common';
import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { Subscription } from '../subscription.entity';
import { CronService } from '../../cron/cron.service';

@Injectable()
export class SubscriptionSubscriber implements EntitySubscriberInterface<Subscription> {
  listenTo() {
    return Subscription;
  }

  afterInsert(event: InsertEvent<Subscription>) {
    CronService.caller().createOrderTask(event.entity);
  };

  afterUpdate(event: UpdateEvent<Subscription>) {
      
  }
}
