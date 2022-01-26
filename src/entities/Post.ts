import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  //@ManyToOne(() => User, (User) => User.id)
  @JoinColumn()
  authorId: string;
  @Column('varchar', { length: 75 })
  title: string;
  @Column('varchar', { length: 100 })
  metaTitle: string;
  @Column('tinytext')
  summary: string;
  @Column('varchar')
  poblished: boolean;
  @Column('text')
  content: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, (User) => User.posts)
  author: Post[];
}

export default Post;
