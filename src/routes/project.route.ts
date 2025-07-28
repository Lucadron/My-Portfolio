import express from 'express';
import { handleCreateProject, handleDeleteProject, handleGetAllProjects, handleGetOneProject, handleUpdateProject } from '../controllers/project.controller';

const router = express.Router();

// Yeni proje oluşturma
router.post('/projects', handleCreateProject);

// Projeleri listele
router.get('/projects', handleGetAllProjects);

// Id ile proje listele
router.get('/projects/:id', handleGetOneProject);

// Proje güncelleme
router.put('/projects/:id', handleUpdateProject);

//Proje silme
router.delete('/projects/:id', handleDeleteProject);

export default router;
