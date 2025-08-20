import express from 'express';
import {
    getAllHobbies,
    createHobby,
    updateHobby,
    deleteHobby
} from '../controllers/hobby.controller';

import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// Tüm hobileri getir (public)
router.get('/', getAllHobbies);

// Yeni hobi ekle (sadece admin)
router.post('/', protectRoute, createHobby);

// Hobi güncelle (sadece admin)
router.put('/:id', protectRoute, updateHobby);

// Hobi sil (sadece admin)
router.delete('/:id', protectRoute, deleteHobby);

export default router;
