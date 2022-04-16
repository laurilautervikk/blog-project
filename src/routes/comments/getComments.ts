import express, { Request, Response } from 'express';
import Post_comment from '../../entities/Post_comment';
const router = express.Router();

// Find user by ID
router.get('/', async (req: Request, res: Response) => {
  try {
    const { postId, skip, take } = req.query;

    const commentsQuery = await Post_comment.createQueryBuilder('comment')
      .innerJoinAndSelect('comment.post', 'post')
      .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
      .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

    if (postId != undefined) {
      commentsQuery.where('post.id = :postId', { postId: postId });
    }

    const comments = await commentsQuery.getMany();

    return res.json(comments);
  } catch (error) {
    // TOTO: use better middleware as logger
    console.log('Database error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find comment',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable find anything',
      message: 'unknown error'
    });
  }
});

export default router;
