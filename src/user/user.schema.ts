import { EntitySchema } from 'typeorm';
import { User } from 'src/user/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        username: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
    },
    relations: {
    },
  });
