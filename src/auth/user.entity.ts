import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;

  @Column()
  salt: string;

  @Column()
  password: string;
}
