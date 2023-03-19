import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Address } from 'src/address/address.entity'
import { Subscription } from 'src/subscription/subscription.entity';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({nullable: true})
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column({ unique: true , nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToOne(() => Address, (address) => address.user, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Subscription, (subscription) => subscription.user, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  subscription: Subscription;
}
