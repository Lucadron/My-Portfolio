import express from 'express';
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from '../controllers/skills.controller';

import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// Tüm becerileri getir (public)
router.get('/', getAllSkills);

// Beceri oluştur (sadece admin)
router.post('/', protectRoute, createSkill);

// Beceri güncelle (sadece admin)
router.put('/:id', protectRoute, updateSkill);

// Beceri sil (sadece admin)
router.delete('/:id', protectRoute, deleteSkill);

export default router;
