import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
const router = express.Router();

//find Tag by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Tag.delete({ id: id });

    if (!deleted) {
      return res.status(404).json({
        message: 'no Tag found with given ID: ' + id
      });
    }

    return res.status(200).json(deleted);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find Tag',
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
