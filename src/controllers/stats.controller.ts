import { Request, Response } from 'express';
import Project from '../models/project.model';
import Cv from '../models/cv.model';

// Admin için istatistikleri döndür
export const getStats = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        const cv = await Cv.findOne();

        const totalProjects = projects.length;
        const totalProjectViews = projects.reduce((sum, p) => sum + (p.viewCount || 0), 0);
        const totalCvDownloads = cv?.downloadCount || 0;

        return res.status(200).json({
            totalProjects,
            totalProjectViews,
            totalCvDownloads
        });
    } catch (error) {
        console.error('Stats error:', error);
        return res.status(500).json({ error: 'Sunucu hatası' });
    }
};
