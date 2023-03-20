import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity'
import { Order } from 'src/order/order.entity';


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

    @OneToOne(() => User, (user) => user.address, { cascade: true, onDelete: 'SET NULL' })
    user: User;

    @OneToMany(() => Order, (order) => order.address, { cascade: true, onDelete: 'SET NULL' })
    orders: Order[];
}
