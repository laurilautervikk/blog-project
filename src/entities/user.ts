import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar', { length: 150 })
  firstName: string;
  @Column('varchar', { length: 150 })
  midlleName: string;
  @Column('varchar', { length: 150 })
  lastName: string;
  @Column('varchar')
  mobile: string;
  @Column('varchar', { length: 320, unique: true })
  email: string;
  @Column()
  registeredAt: Date;
  @Column()
  lastLogin: Date;
  @Column('tinytext', { nullable: true })
  intro: string;
  @Column('text', { nullable: true })
  profile: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
