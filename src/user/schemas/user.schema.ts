import { EntitySchema } from 'typeorm';
import { User } from '../../user/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    username: {
      type: String,
      nullable: false,
      unique: true,
      length: 55,
    },
    firstName: {
      type: String,
      nullable: true,
      length: 55,
    },
    lastName: {
      type: String,
      nullable: true,
      length: 55,
    },
    email: {
      type: String,
      nullable: false,
      unique: true,
    },
    password: {
      type: String,
      nullable: false,
    },
  },
  relations: {
    address: {
      type: 'one-to-one',
      target: 'Address',
      cascade: true,
      onDelete: 'SET NULL',
    },
    subscription: {
      type: 'one-to-one',
      target: 'Subscription',
      cascade: true,
      onDelete: 'SET NULL',
    }
  },
});
