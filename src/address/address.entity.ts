import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 155 })
  address: string;

  @Column({ type: 'int', width: 5 })
  zipCode: number;

  @Column({ length: 55 })
  city: string;

  @Column({ length: 55 })
  country: string;

  @OneToOne(() => User, (user) => user.address, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  user: User;

  @OneToMany(() => Order, (order) => order.address, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  orders: Order[];
}

