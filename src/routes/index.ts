import express from 'express';
import fs from 'fs';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
const router = express.Router();
var userRoutes: string[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function (file) {
//   userRoutes.push(file.substr(0, file.indexOf('.')));
// });

console.log(userRoutes.toString());
router.use('/users', [createUser, getUser, getUsers]);
router.use('/posts', [getPost, getPosts]);

export default router;
