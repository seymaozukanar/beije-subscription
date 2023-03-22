import { Subscription } from "../subscription.entity";
import { EntitySchema } from 'typeorm';

export const subscriptionSchema = new EntitySchema<Subscription>({
  name: 'Subscription',
  target: Subscription,
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
    isActive: {
      type: Boolean,
      default: true,
    },
    numberOfUnits: {
      type: Number,
      default: 0,
    },
    frequency: {
      type: Number,
      default: 0,
    },
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'User',
      cascade: true,
      onDelete: 'SET NULL',
    },
    orders: {
      type: 'one-to-many',
      target: 'Order',
      cascade: true,
      onDelete: 'SET NULL',
    }
  },
});
