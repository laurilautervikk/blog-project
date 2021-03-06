import express from 'express';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import deleteUser from './users/deleteUser';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import createPost from './posts/createPost';
import deletePost from './posts/deletePost';
import createCategory from './categories/createCategory';
import getCategory from './categories/getCategory';
import getCategories from './categories/getCategories';
import deleteCategory from './categories/deleteCategory';
import createComment from './comments/createComment';
import getComment from './comments/getComment';
import getComments from './comments/getComments';
import deleteComment from './comments/deleteComment';
import createTag from './tags/createTag';
import getTag from './tags/getTag';
import getTags from './tags/getTags';
import deleteTag from './tags/deleteTag';
const router = express.Router();
var userRoutes: string[] = [];

console.log(userRoutes.toString());
router.use('/users', [createUser, getUser, getUsers, deleteUser]);
router.use('/posts', [createPost, getPost, getPosts, deletePost]);
router.use('/categories', [
  createCategory,
  getCategory,
  getCategories,
  deleteCategory
]);
router.use('/comments', [
  createComment,
  getComment,
  getComments,
  deleteComment
]);
router.use('/tags', [createTag, getTag, getTags, deleteTag]);

export default router;
