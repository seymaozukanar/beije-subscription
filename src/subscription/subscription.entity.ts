import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany, AfterInsert } from 'typeorm';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';
import { CronService } from '../cron/cron.service';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ update: false })
  creationDatetime: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  numberOfUnits: number;

  @Column({ default: 0 })
  frequency: number; // in terms of month

  @OneToOne(() => User, (user) => user.subscription, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  user: User;

  @OneToMany(() => Order, (order) => order.subscription, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  orders: Order[];

  // to be used in payment flow
  async calculatePrice() {
    let totalPrice: number = this.numberOfUnits * 29;
    return totalPrice;
  }

  @AfterInsert()
  createCronOrderTask() {
    CronService.caller().createOrderTask(this);
  }
}
