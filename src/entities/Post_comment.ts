import {
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany
} from 'typeorm';
import Post from './Post';

@Entity()
export default class Post_comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  postId!: string;

  @Column('varchar', { default: 'missing parentId' })
  parentId!: string;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('boolean', { default: false })
  published: boolean;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  publishedAt: Date;

  @ManyToOne(() => Post, (post) => post.id, {
    createForeignKeyConstraints: true
  })
  post: Promise<Post>;

  // Parent post_comment
  @OneToMany(() => Post_comment, (post_comment) => post_comment.parentId, {
    createForeignKeyConstraints: true
  })
  parentPost_comment: Promise<Post>;
}
