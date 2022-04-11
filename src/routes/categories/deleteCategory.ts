import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

//find post by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await Post.delete({ id: id });

    if (!post) {
      return res.json({
        message: 'no post found with given ID'
      });
    }
    console.log('Successfully deleted Post ID: ' + id);
    return res.send('Successfully deleted Post ID: ' + id);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find post',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable to delete',
      message: 'unknown error'
    });
  }
});

export default router;
