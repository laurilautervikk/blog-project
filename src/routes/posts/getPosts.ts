import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import User from '../../entities/Post';
const router = express.Router();

// Find user by ID
router.get('/', async (req: Request, res: Response) => {
  try {
    const { skip, take } = req.query;

    const posts = await Post.find({
      take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
      skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0,
      order: {
        createdAt: 'DESC'
      }
    });

    console.log(...posts); //spreading instead of looping

    const postsForUser = await Post.createQueryBuilder('post')
      .innerJoin('post.author', 'author')
      .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
      .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0)
      .getRawMany();

    res.send(postsForUser);
  } catch (error) {}
});

export default router;
