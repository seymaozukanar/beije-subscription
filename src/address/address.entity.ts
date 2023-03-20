import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity'
import { Order } from 'src/order/order.entity';


@Entity()
export class Address{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150, nullable: false })
    address: string;

    @Column({ type: 'int', width: 5, nullable: false })
    zipCode: number;

    @Column({ length:55, nullable:false })
    city: string;

    @Column({ length:55, nullable:false })
    country: string;

    @OneToOne(() => User, (user) => user.address, { cascade: true, onDelete: 'SET NULL' })
    user: User;

    @OneToMany(() => Order, (order) => order.address, { cascade: true, onDelete: 'SET NULL' })
    orders: Order[];
}
