import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSubscriptionDTO } from './dtos/create-subscription.dto';
import { Subscription } from './subscription.entity';
import { dataSource } from 'src/app.module';
import { User } from 'src/user/user.entity';


@Injectable()
export class SubscriptionService {

    constructor(
        @InjectRepository(Subscription)
        private subscriptionRepository: Repository<Subscription>
        ){}

    async getSubscriptions(){
        const subscriptions = await this.subscriptionRepository.find();
        return subscriptions;
    }

    async getSubscription(id: number){
        const subscription = await this.subscriptionRepository.findOneBy({id:id});
        return subscription;
    }

    async createSubscription(userID: number, createSubscriptionDTO: createSubscriptionDTO){
        const newSubscription = await this.subscriptionRepository.create(createSubscriptionDTO);
        const user = await dataSource.getRepository(User).createQueryBuilder('user').where('user.id = :id', {id: userID}).getOne();
        newSubscription.user = user;
        //newSubscription.save()
        return newSubscription;
    }

    async deleteSubscription(id: number){
        this.subscriptionRepository.delete({id:id})
    }

    // create a new instance if there is no subscription with given id
    // update otherwise
    async updateSubscription(userID: number, id: number, createSubscriptionDTO: createSubscriptionDTO){
        const updatedSubscription = await this.subscriptionRepository.findOneBy({id:id});
        if (updatedSubscription) {
            this.subscriptionRepository.update(id, createSubscriptionDTO);
            return updatedSubscription;
        }
        else {
            const newSubscription = await this.createSubscription(userID, createSubscriptionDTO);
            return newSubscription;
        }
    }
}