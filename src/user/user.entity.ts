import { Role } from '../auth/role.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Subscription } from '../subscription/subscription.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ unique: true, length: 55 })
  username: string;

  @Column({ nullable: true, length: 55 })
  firstName: string;

  @Column({ nullable: true, length: 55 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.User })
  roles: Role[];

  @OneToOne(() => Address, (address) => address.user, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Subscription, (subscription) => subscription.user, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  subscription: Subscription;
}
