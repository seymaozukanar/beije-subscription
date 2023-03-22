import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ update: false })
  creationDatetime: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: false, default: 0 })
  numberOfUnits: number;

  @Column({ nullable: false, default: 0 })
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
}
