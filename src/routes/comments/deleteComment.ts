import express, { Request, Response } from 'express';
import Post_comment from '../../entities/Post_comment';
const router = express.Router();

//find post by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const comment = await Post_comment.delete({ id: id });

    if (!comment) {
      return res.status(404).json({
        message: 'no comment found with given ID: ' + id
      });
    }
    return res.status(200).json(comment);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find comment',
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
