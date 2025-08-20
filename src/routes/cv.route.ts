import express from 'express';
import { getCv, updateCv } from '../controllers/cv.controller';
import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// CV verisini getir (herkes erişebilir, sayaç artırılır)
router.get('/', getCv);

// CV verisini güncelle (sadece admin erişebilir)
router.put('/', protectRoute, updateCv);

export default router;
