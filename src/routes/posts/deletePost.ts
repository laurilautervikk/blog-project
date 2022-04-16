import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

//find post by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Post.delete({ id: id });

    if (!deleted) {
      return res.json({
        message: 'no post found with ID: ' + id
      });
    }
    console.log(deleted);
    return res.status(200).json(deleted);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: 'Unable to find post',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.status(400).json({
      error: 'Unable to delete',
      message: 'unknown error'
    });
  }
});

export default router;
