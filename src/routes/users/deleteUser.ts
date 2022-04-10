import express, { Request, Response } from 'express';
import User from '../../entities/User';
const router = express.Router();

//find post by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.delete({ id: id });

    if (!user) {
      return res.json({
        message: 'no user found with given ID'
      });
    }
    console.log('Successfully deleted user ID: ' + id);
    return res.json('Successfully deleted user ID: ' + id);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find user',
        message: error.message
      });
    }
    return res.json({
      error: 'Unable to delete',
      message: 'unknown error'
    });
  }
});

export default router;
