import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
import { v4 as uuidV4 } from 'uuid';
const router = express.Router();

interface CategoryInput {
  title: string;
  slug: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, slug, content } = req.body as CategoryInput;
    console.log('request', req.body);

    // validation näide
    if (!title || !slug || !content) {
      //if (!authorId) {
      return res.json({ error: 'all fields must be filled' });
    }
    // TODO: valideeri jsonid (nt. sanitize ja validate)

    const titleCheck = await Category.findOne({ title: title });
    if (!title) {
      return res.json({
        message: 'There is no category with this title already: ' + titleCheck
      });
    }

    const category = Category.create({
      id: uuidV4(),
      title: title,
      metaTitle: title.replace(/\s/g, '-'),
      slug: slug,
      content: content
    });
    console.log(category);
    const newCategory = await category.save();
    if (!newCategory) {
      // TODO: parem logger vahevara kasutusele võtta
      console.log({ error: 'unable to save post' });
      // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
      return res.json({
        error: 'Unable to create new post',
        message: 'typeorm save'
      });
    }

    return res.json(newCategory);
  } catch (error) {
    console.log('Unknown databse error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to create new post',
        message: error.message
      });
    }
    return res.json({
      error: 'Unable to create new post',
      message: 'Unknown error'
    });
  }
});

export default router;
