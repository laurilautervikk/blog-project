import express from 'express';
//import fs from 'fs';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import deleteUser from './users/deleteUser';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import createPost from './posts/createPost';
import deletePost from './posts/deletePost';
import createCategory from './categories/createCategory';

import getCategories from './categories/getCategories';
const router = express.Router();
var userRoutes: string[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function (file) {
//   userRoutes.push(file.substr(0, file.indexOf('.')));
// });

console.log(userRoutes.toString());
router.use('/users', [createUser, getUser, getUsers, deleteUser]);
router.use('/posts', [createPost, getPost, getPosts, deletePost]);
router.use('/categories', [
  createCategory,
  //getCategory,
  getCategories
  //deleteCategory
]);
// router.use('/comments', [
//   createComment,
//   getComment,
//   getComments,
//   deleteComment
// ]);
// router.use('/tags', [createTag, getTag, getTags, deleteTag]);

//add some here

export default router;
