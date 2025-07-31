import express from 'express';
import { handleCreateProject, handleDeleteProject, handleGetAllProjects, handleGetOneProject, handleUpdateProject } from '../controllers/project.controller';

import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// Yeni proje oluşturma
router.post('/projects', protectRoute, handleCreateProject);

// Projeleri listele
router.get('/projects', handleGetAllProjects);

// Id ile proje listele
router.get('/projects/:id', handleGetOneProject);

// Proje güncelleme
router.put('/projects/:id', protectRoute, handleUpdateProject);

//Proje silme
router.delete('/projects/:id', protectRoute, handleDeleteProject);

export default router;
