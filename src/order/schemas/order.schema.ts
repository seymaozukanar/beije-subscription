import { EntitySchema } from 'typeorm';
import { Order, orderStatus } from '../order.entity';

export const orderSchema = new EntitySchema<Order>({
    name: 'Order',
    target: Order,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        creationDatetime: {
            type: Date,
            generated: true,
            update: false,
        },
        status: {
            type: 'enum',
            enum: orderStatus,
            default: orderStatus.RECEIVED,
        }
    },
    relations: {
        subscription: {
            type: 'many-to-one',
            target: 'Subscription',
            cascade: true,
            onDelete: 'SET NULL'
        },
        address: {
            type: 'many-to-one',
            target: 'Address',
            cascade: true,
            onDelete: 'SET NULL',
        }
    }
})
