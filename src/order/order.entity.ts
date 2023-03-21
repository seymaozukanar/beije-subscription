import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Address } from '../address/address.entity';
import { Subscription } from '../subscription/subscription.entity';

export enum orderStatus{
    RECEIVED = 'received',
    ON_THE_WAY = 'on the way',
    DELIVERED = 'delivered',
    NOT_DELIVERED = 'not delivered',
    COMPLETED = 'completed',
    CANCELLED = 'is cancelled',
}

@Entity()
export class Order{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    creationDatetime: Date;

    @Column({ type:'enum', enum:orderStatus, default:orderStatus.RECEIVED })
    status: orderStatus;

    @ManyToOne(() => Subscription, (subscription) => subscription.orders, { cascade: true, onDelete: 'SET NULL' })
    subscription: Subscription;

    @ManyToOne(() => Address, (address) => address.orders, { cascade: true, onDelete: 'SET NULL' })
    address: Address;
}
