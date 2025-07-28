import express from 'express';
import { ping } from '../controllers/ping.controller';

const router = express.Router();

// GET /api/ping → controller fonksiyonuna yönlendiriliyor
router.get('/ping', ping);

export default router;
