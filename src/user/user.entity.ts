import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Address } from 'src/address/address.entity'


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({nullable: true})
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Address, (address) => address.user, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  address: Address;
}
