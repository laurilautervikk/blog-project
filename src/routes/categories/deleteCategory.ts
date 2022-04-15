import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
const router = express.Router();

//find category by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await Category.delete({ id: id });

    if (!category) {
      return res.json({
        message: 'no category found with given ID'
      });
    }
    console.log('Successfully deleted category ID: ' + id);
    return res.send('Successfully deleted category ID: ' + id);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find category',
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
