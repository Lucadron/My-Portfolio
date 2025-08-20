import Project from '../models/project.model';
import Cv from '../models/cv.model';

// Proje görüntülenme sayacını 1 artır
export const incrementProjectViews = async (projectId: string) => {
    try {
        await Project.findByIdAndUpdate(projectId, { $inc: { viewCount: 1 } });
    } catch (error) {
        console.error('Proje görüntülenme artışı hatası:', error);
    }
};

// CV indirme sayacını 1 artır
export const incrementCvDownloads = async () => {
    try {
        const cv = await Cv.findOne();
        if (cv) {
            cv.downloadCount += 1;
            await cv.save();
        }
    } catch (error) {
        console.error('CV indirme sayacı artışı hatası:', error);
    }
};
