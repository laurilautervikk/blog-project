import express, { Request, Response } from 'express';
import User from '../../entities/User';
const router = express.Router();

// Find user by ID
router.get('/', async (req: Request, res: Response) => {
  try {
    //const { id } = req.params;
    const { skip, take } = req.query;

    //update this from Jaanus repo
    console.log({ skip: skip, take: take });
    ///////////////

    const users = await User.find({
      //update this from Jaanus repo
      take: take ? Number.parseInt(take as string) : 20
      ///////////////
    });

    if (!users) {
      return res.send({
        message: 'no user found with given ID'
      });
    }

    return res.send(users);
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
