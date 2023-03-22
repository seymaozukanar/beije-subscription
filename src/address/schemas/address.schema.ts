import { EntitySchema } from 'typeorm';
import { Address } from '../address.entity';

export const AddressSchema = new EntitySchema<Address>({
  name: 'Address',
  target: Address,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    address: {
      type: String,
      nullable: false,
      length: 225,
    },
    city: {
      type: String,
      nullable: false,
      length: 55,
    },
    country: {
      type: String,
      nullable: false,
      length: 55,
    },
    zipCode: {
      type: Number,
      width: 5,
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
  }
});
