import {
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import Post_comment from './Post_comment';
import Category from './Category';
import User from './User';
import Tag from './Tag';
import Post_meta from './Post_meta';

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 75 })
  title: string;

  @Column()
  authorId!: string;

  @Column('varchar', { default: 'missing parentId' })
  parentId!: string;

  @Column('varchar', { length: 100 })
  metaTitle?: string;

  @Column('tinytext')
  summary: string;

  @Column('boolean', { default: false })
  published: boolean;

  @Column('text')
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    createForeignKeyConstraints: true
  })
  author!: Promise<User>;

  // Parent post
  @OneToMany(() => Post, (post) => post.parentId, {
    createForeignKeyConstraints: true
  })
  parentPost?: Promise<User>;

  @OneToMany(() => Post_comment, (post_comment) => post_comment.parentId)
  posts: Post_comment[];
  createForeignKeyConstraints: true;

  @OneToMany(() => Post_meta, (post_meta) => post_meta.postId)
  meta: Post_meta[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags!: Tag[];
}
