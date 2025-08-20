import express from 'express';
import { handleCreateProject, handleDeleteProject, handleGetAllProjects, handleGetOneProject, handleUpdateProject } from '../controllers/project.controller';

import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// Yeni proje oluşturma
router.post('/', protectRoute, handleCreateProject);

// Projeleri listele
router.get('/', handleGetAllProjects);

// Id ile proje listele
router.get('/:id', handleGetOneProject);

// Proje güncelleme
router.put('/:id', protectRoute, handleUpdateProject);

//Proje silme
router.delete('/:id', protectRoute, handleDeleteProject);

export default router;
