import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity'


@Entity()
export class Address{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    zipCode: number;

    @Column()
    city: string;

    @Column()
    country: string;

    @OneToOne(() => User, (user) => user.address)
    user: User;
}
