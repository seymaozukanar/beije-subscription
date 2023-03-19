import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/user.entity';


@Entity()
export class Subscription{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    creationDatetime: Date;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: false, default: 0 })
    numberOfUnits: number;

    @Column({ nullable: false, default:0 })
    frequency: number; // in terms of month

    @OneToOne(() => User, (user) => user.subscription, { cascade: true, onDelete: 'SET NULL' })
    user: User;
}
