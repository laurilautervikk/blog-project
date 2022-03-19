import {
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Entity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import Post from './Post';

@Entity()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  parentId!: string;

  @Column('varchar', { length: 75 })
  title: string;

  @Column('varchar', { length: 100 })
  metaTitle: string;

  @Column('varchar', { length: 100 })
  slug: string;

  @Column('text')
  content: string;

  @ManyToMany(() => Post)
  @JoinTable()
  categories: Post[];

  // Parent post_comment
  @ManyToOne(() => Category, (category) => category.parentId, {
    createForeignKeyConstraints: true
  })
  parentCategory: Promise<Post>;
}
