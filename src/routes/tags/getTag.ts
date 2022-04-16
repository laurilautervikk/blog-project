import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
const router = express.Router();

//find tag by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tag = await Tag.findOne({ id: id });

    if (!tag) {
      return res.json({
        message: 'no tag found with ID: ' + id
      });
    }
    return res.json(tag);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find tag',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable to do things',
      message: 'unknown error'
    });
  }
});

export default router;
