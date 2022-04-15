import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
const router = express.Router();

// Find user by ID
router.get('/', async (req: Request, res: Response) => {
  try {
    const { userId, skip, take } = req.query;

    const postsQuery = Post.createQueryBuilder('post')
      .innerJoinAndSelect('post.author', 'author')
      .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
      .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

    if (userId != undefined) {
      postsQuery.where('author.id = :userId', { userId: userId });
    }

    const posts = await postsQuery.getMany();

    return res.json(posts);
  } catch (error) {
    // TOTO: use better middleware as logger
    console.log('Database error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find post',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unknown error: Unable find anything',
      message: 'unknown error'
    });
  }
});

export default router;
