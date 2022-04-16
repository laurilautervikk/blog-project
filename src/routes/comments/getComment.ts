import express, { Request, Response } from 'express';
import Post_comment from '../../entities/Post_comment';
const router = express.Router();

//find post by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const comment = await Post_comment.findOne({ id: id });

    if (!comment) {
      return res.json({
        message: 'no comment found with ID: ' + id
      });
    }
    return res.json(comment);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find category',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable to find category',
      message: 'unknown error'
    });
  }
});

export default router;
