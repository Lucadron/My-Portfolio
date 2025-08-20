import { Request, Response } from 'express';
import Cv from '../models/cv.model';
import { updateCvSchema } from '../validators/cv.validator';
import { incrementCvDownloads } from '../services/stats.service';

// CV linkini getir ve sayaç artır
export const getCv = async (req: Request, res: Response) => {
  try {
    const cv = await Cv.findOne();
    if (!cv) {
      return res.status(404).json({ error: 'CV bulunamadı' });
    }

    // İndirme sayaçını artır
    await incrementCvDownloads();
    
    return res.status(200).json({
      cvUrl: cv.cvUrl,
      downloadCount: cv.downloadCount
    });
  } catch (error) {
    console.error('Get CV error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// CV linkini güncelle veya oluştur
export const updateCv = async (req: Request, res: Response) => {
  try {
    const parsed = updateCvSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues });
    }

    const { cvUrl } = parsed.data;

    let cv = await Cv.findOne();
    if (cv) {
      cv.cvUrl = cvUrl;
      await cv.save();
    } else {
      cv = await Cv.create({ cvUrl });
    }

    return res.status(200).json({
      message: 'CV bağlantısı güncellendi',
      cvUrl: cv.cvUrl
    });
  } catch (error) {
    console.error('Update CV error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
