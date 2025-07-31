import express from 'express';
import { login } from '../controllers/auth.controller';

const router = express.Router();

// Giriş işlemi
router.post('/login', login);

export default router;
