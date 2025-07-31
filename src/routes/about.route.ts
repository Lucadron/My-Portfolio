import express from 'express';
import { getAbout, updateAbout } from '../controllers/about.controller';
import { protectRoute } from '../middlewares/auth.middleware';

const router = express.Router();

// Hakkımda verisini al (herkes erişebilir)
router.get('/', getAbout);

// Hakkımda verisini güncelle (sadece admin erişebilir)
router.put('/', protectRoute, updateAbout);

export default router;
