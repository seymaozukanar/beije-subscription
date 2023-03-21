import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Subscription } from '../subscription/subscription.entity';
import { dataSource } from '../app.module';
import { Order, orderStatus } from '../order/order.entity';

@Injectable()
export class CronService {
        constructor(private schedulerRegistry: SchedulerRegistry) {}
        private readonly logger = new Logger(CronService.name);

        createOrderTask(subscription: Subscription) {
    
            const interval = subscription.frequency;
            const dayOfMonth = 15; // = subscription.creationDatetime.getDate();
            const task = new CronJob(`0 0 9 ${dayOfMonth} */${interval} *`, () => {
                dataSource.createQueryBuilder().insert().into(Order).values([{
                                    'status': orderStatus.RECEIVED,
                                    'subscription': subscription,
                                    'address': subscription.user.address,
                                    }]).execute();
            })

            this.schedulerRegistry.addCronJob('orders', task);
            task.start();
    
            this.logger.warn(`New order has been created for the subscription: ${subscription.id}
                              of user ${subscription.user.username}`
                            );
        }

        cancelOrderTask(subscription: Subscription) {
    
            this.schedulerRegistry.deleteCronJob('orders');
            this.logger.warn(`Order task has been deleted for the subscription: ${subscription.id}
                              of user ${subscription.user.username}`
                            );
        } 
}
