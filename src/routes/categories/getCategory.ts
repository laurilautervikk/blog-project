import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
const router = express.Router();

//find category by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({ id: id });

    if (!category) {
      return res.json({
        message: 'no post found with given ID'
      });
    }
    return res.json(category);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find category',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable to find anything',
      message: 'unknown error'
    });
  }
});

export default router;
