import express, { Request, Response } from 'express';
import Post_comment from '../../entities/Post_comment';
import Post from '../../entities/Post';
import { v4 as uuidV4 } from 'uuid';
const router = express.Router();

interface CommentInput {
  postId: string;
  parentId: string;
  title: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { postId, parentId, title, content } = req.body as CommentInput;
    console.log('request', req.body);

    // validation
    if (!postId || !title || !content) {
      //if (!authorId) {
      return res.json({ error: 'all fields must be filled' });
    }

    const post = await Post.findOne({ id: postId });
    if (!post) {
      return res.json({ message: 'Cant comment a non existent post' });
    }

    const comment = Post_comment.create({
      id: uuidV4(),
      postId: post.id,
      parentId: parentId,
      title: title,
      content: content,
      published: false
    });

    console.log(comment);

    const newComment = await comment.save();
    if (!newComment) {
      // TODO: parem logger vahevara kasutusele võtta
      console.log({ error: 'unable to save Comment' });
      // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
      return res.json({
        error: 'Unable to create new Comment',
        message: 'typeorm save'
      });
    }

    return res.json(newComment);
  } catch (error) {
    console.log('Unknown databse error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to create new omment',
        message: error.message
      });
    }
    return res.json({
      error: 'Unable to create new Comment',
      message: 'Unknown error'
    });
  }
});

export default router;
