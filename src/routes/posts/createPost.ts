import express, { Request, Response } from 'express';
import User from '../../entities/User';
import { v4 as uuidV4 } from 'uuid';
import Post from '../../entities/Post';
const router = express.Router();

interface PostInput {
  authorId: string;
  title: string;
  summary: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { authorId, title, summary, content } = req.body as PostInput;
    // TODO: validate inputs

    const user = await User.findOne({ id: authorId });

    if (!user) {
      return res.json({ message: 'User not found' });
    }

    const post = Post.create({
      id: uuidV4(),
      authorId: user.id,
      title: title,
      metaTitle: title.replace(/\s/g, '-'),
      summary: summary,
      content: content,
      published: false
    });

    const newPost = await post.save();

    if (!newPost) {
      // TOTO: use better middleware as logger
      console.log({ error: 'unable to create new post' });
      // TODO: need error handling middleware
      return res.json({
        error: 'Unable to create new post',
        message: 'unknown error'
      });
    }
    return res.json(newPost);
  } catch (error) {
    // TOTO: use better middleware as logger
    console.log('Database error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to create new post',
        message: error.message
      });
    }

    return res.json({
      error: 'Unable to create new post',
      message: 'unknown error'
    });
  }
});

export default router;
