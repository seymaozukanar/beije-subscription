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
            nullable: false, 
            unique: true,
            length: 30,
        },
        firstName: {
            type: String,
            length: 30,
        },
        lastName: {
            type: String,
            length: 30,
        },
        email: {
            type: String,
            nullable: false,
        },
        password: {
            type: String,
            nullable: false,
        },
    },
    relations: {
    },
  });
