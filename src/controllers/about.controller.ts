import { Request, Response } from 'express';
import About from '../models/about.model';
import { updateAboutSchema } from '../validators/about.validator';

// Hakkımda verisini getir
export const getAbout = async (req: Request, res: Response) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({ error: 'Hakkımda yazısı bulunamadı' });
    }

    return res.status(200).json(about);
  } catch (error) {
    console.error('Get about error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Hakkımda verisini güncelle (veya yoksa oluştur)
export const updateAbout = async (req: Request, res: Response) => {
  try {
    const parsed = updateAboutSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues });
    }

    const { content } = parsed.data;

    let about = await About.findOne();
    if (about) {
      about.content = content;
      await about.save();
    } else {
      about = await About.create({ content });
    }

    return res.status(200).json({ message: 'Hakkımda yazısı güncellendi', about });
  } catch (error) {
    console.error('Update about error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
