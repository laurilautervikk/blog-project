import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

//find post by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({ id: id });

    if (!post) {
      return res.send({
        message: 'no post found with given ID'
      });
    }
    return res.send(post);
  } catch (error) {
    if (error instanceof Error) {
      return res.send({
        error: 'Unable to find user',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.send({
      error: 'Unable to create new user',
      message: 'unknown error'
    });
  }
});

export default router;
