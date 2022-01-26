import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  getConnection,
  BaseEntity,
  OneToMany
} from 'typeorm';
import Post from './Post';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar', { length: 150 })
  firstName: string;
  @Column('varchar', { length: 150 })
  middleName?: string;
  @Column('varchar', { length: 150 })
  lastName: string;
  @Column('varchar')
  mobile: string;
  @Column('varchar', { length: 320, unique: true })
  email: string;
  @CreateDateColumn()
  createdAt: Date;
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  lastLogin: Date;
  @Column('tinytext', { nullable: true })
  intro?: string;
  @Column('text', { nullable: true })
  profile?: string;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  // save() {
  //   return getConnection().getRepository('User').save(this);
  // }
}

export default User;
